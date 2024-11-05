import { big } from '@galacticcouncil/xcm-core'
import { atom } from 'jotai'

import { pjsApiAtom } from './pjsApiAtom'
import { transferAtom } from './transferAtom'
import { amountAtom, assetAtom, destChainAtom } from './xcmFieldsAtoms'

export const extrinsicAtom = atom(async get => {
  const asset = get(assetAtom)
  const amount = get(amountAtom)
  const destChain = get(destChainAtom)
  const transfer = await get(transferAtom)
  const api = await get(pjsApiAtom)
  if (!asset || !amount || !destChain || !transfer || !api) return

  const validateAmount = () => {
    const { balance, max, min } = transfer.source

    const minWithRelay = min.copyWith({ amount: destChain.isEvmChain() ? min.amount * 2n : min.amount })

    const amountBn = big.toBigInt(amount, balance.decimals)
    const maxBn = big.toBigInt(max.amount, max.decimals)
    const minBn = big.toBigInt(minWithRelay.amount, min.decimals)

    if (balance.amount === 0n) {
      throw new Error('Insufficient balance.')
    }
    if (amountBn < minBn) {
      throw new Error(
        `The minimum transferable amount is ${minWithRelay.toDecimal(minWithRelay.decimals)} ${asset.originSymbol}.`
      )
    }
    if (amountBn > maxBn) {
      throw new Error(`The maximum transferable amount is ${max.toDecimal(max.decimals)} ${asset.originSymbol}.`)
    }

    return
  }
  validateAmount()

  const validateTransfer = async () => {
    const report = await transfer.validate(transfer.source.fee.amount)
    if (!report.length) return

    throw new Error(
      report.map(r => (r === undefined ? 'Unable to construct extrinsic.' : String(r['error']))).join('\n')
    )
  }
  await validateTransfer()

  const call = await transfer.buildCall(amount)
  const extrinsic = api.tx(call.data)

  return extrinsic
})
