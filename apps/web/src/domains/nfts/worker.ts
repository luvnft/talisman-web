import {
  createAcalaNftAsyncGenerator,
  createBitCountryNftAsyncGenerator,
  createEvmNftAsyncGenerator,
  createPolkadotAssetHubNftAsyncGenerator,
  createKusamaAssetHubNftAsyncGenerator,
  createRmrk2NftAsyncGenerator,
  createStatemineNftAsyncGenerator,
  createUniqueNetworkNftAsyncGenerator,
  type Nft,
} from '@talismn/nft'
import { Observable } from 'rxjs'
import { expose } from 'threads/worker'

const subscribeNfts = (address: string, options: { batchSize: number; acalaRpc: string; bitcountryRpc: string }) =>
  new Observable<Nft | { error: unknown }>(observer => {
    const promises = (
      address.startsWith('0x')
        ? [createEvmNftAsyncGenerator]
        : [
            createAcalaNftAsyncGenerator({ rpc: options.acalaRpc }),
            createBitCountryNftAsyncGenerator({ rpc: options.bitcountryRpc }),
            createPolkadotAssetHubNftAsyncGenerator,
            createKusamaAssetHubNftAsyncGenerator,
            createRmrk2NftAsyncGenerator,
            createStatemineNftAsyncGenerator,
            createUniqueNetworkNftAsyncGenerator,
          ]
    ).map(async createNftAsyncGenerator => {
      try {
        for await (const nft of createNftAsyncGenerator(address, { batchSize: options.batchSize })) {
          if (nft instanceof Error) {
            observer.next({ error: nft })
          } else {
            observer.next(nft)
          }
        }
      } catch (error: unknown) {
        observer.next({ error })
      }
    })

    Promise.all(promises)
      .then(() => observer.complete())
      .catch(error => observer.error(error))
  })

export type SubscribeNfts = typeof subscribeNfts

expose(subscribeNfts)
