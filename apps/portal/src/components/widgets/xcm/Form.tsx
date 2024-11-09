import type { PropsWithChildren, ReactNode } from 'react'
import { Button, CircularProgressIndicator, Details, Surface, Text, TextInput } from '@talismn/ui'

import { cn } from '@/lib/utils'

import { ReverseRouteButton } from './ReverseRouteButton'

export type FormProps = {
  accountSelect: ReactNode
  amount?: string
  onChangeAmount: (value: string) => unknown
  onRequestMaxAmount: () => unknown
  fiat?: ReactNode
  available?: ReactNode
  max?: ReactNode
  amountError?: string
  tokenSelect?: ReactNode
  destTokenSelect?: ReactNode
  reversible?: boolean
  onRequestReverse: () => unknown
  destAccountSelect?: ReactNode
  info?: ReactNode
  onRequestTransport: () => unknown
  canTransport?: boolean
  transportInProgress?: boolean
  loading?: boolean
}

export const Form = ({ tokenSelect, destTokenSelect, ...props }: FormProps) => {
  return (
    <Container info={props.info}>
      <Section header="Select account">
        <label>
          <Text.BodySmall as="div" css={{ marginBottom: '0.8rem' }}>
            Origin account
          </Text.BodySmall>
          {props.accountSelect}
        </label>
      </Section>
      <Section
        header={
          <div className="flex items-start justify-between">
            <div>Select asset</div>
            <a
              className="text-foreground/70 hover:text-foreground text-sm"
              href="https://forms.gle/7Xv86Xkf4zmV5V9u7"
              target="_blank"
              rel="noreferrer noopener"
            >
              Can't find your asset?
            </a>
          </div>
        }
      >
        <div className="flex flex-col items-center gap-[0.8rem] lg:flex-row">
          <label className="w-full">
            <Text.BodySmall as="div" css={{ marginBottom: '0.8rem' }}>
              From
            </Text.BodySmall>
            {tokenSelect}
          </label>
          <div className="self-center">
            <div className="hidden lg:block">
              <Text.BodySmall as="div" css={{ marginBottom: '0.8rem' }}>
                &nbsp;
              </Text.BodySmall>
            </div>
            <ReverseRouteButton disabled={props.reversible === false} onClick={props.onRequestReverse} />
          </div>
          <label className="w-full">
            <Text.BodySmall as="div" css={{ marginBottom: '0.8rem' }}>
              To
            </Text.BodySmall>
            {destTokenSelect}
          </label>
        </div>
      </Section>
      <Section header="Select amount">
        <TextInput
          containerClassName="[&>div:nth-of-type(2)]:!px-[1.25rem] [&>div:nth-of-type(2)]:!py-[1.2rem]"
          type="number"
          inputMode="decimal"
          placeholder="0.00"
          leadingLabel={
            <div className="flex flex-row items-center gap-1">
              <span>Available:</span> {props.available ?? <CircularProgressIndicator size="1em" />}
              {props.max ?? null}
            </div>
          }
          trailingLabel={
            props.fiat !== undefined && (
              <div className="flex items-center gap-1">
                Value: <Text.BodySmall alpha="high">{props.fiat}</Text.BodySmall>
              </div>
            )
          }
          leadingSupportingText={props.amountError && <div className="text-orange-400">{props.amountError}</div>}
          value={props.amount ?? ''}
          onChangeText={props.onChangeAmount}
          trailingIcon={
            <button
              className={cn(
                'text-foreground/60 rounded-[0.6rem] border border-current px-4 py-1',
                'hover:text-foreground/80 active:text-foreground/70',
                'disabled:text-foreground/40 disabled:cursor-not-allowed'
              )}
              onClick={props.onRequestMaxAmount}
              disabled={!props.max}
            >
              Max
            </button>
          }
        />
      </Section>
      <div className="[&>details]:!rounded-[8px]">
        <CollapsibleSection header="Select destination" open disabled>
          <Details.Content>
            <label>
              <Text.BodySmall as="div" css={{ marginBottom: '0.8rem' }}>
                Destination account
              </Text.BodySmall>
              {props.destAccountSelect}
            </label>
          </Details.Content>
        </CollapsibleSection>
      </div>
      <Button
        css={{ width: '100%', borderRadius: '8px' }}
        disabled={!props.canTransport}
        loading={props.transportInProgress || props.loading}
        onClick={props.onRequestTransport}
      >
        Transport
      </Button>
    </Container>
  )
}

type ContainerProps = PropsWithChildren<{ info: ReactNode }>

function Container(props: ContainerProps) {
  return (
    <div className="flex w-[min(46rem,100%)] flex-col gap-6 lg:w-[revert] lg:flex-row lg:gap-0">
      <section className="flex flex-col gap-3 lg:w-[46rem]">{props.children}</section>
      {props.info}
    </div>
  )
}

function Section(props: PropsWithChildren<{ header: ReactNode }>) {
  return (
    <Surface css={{ borderRadius: 8, padding: 16 }}>
      <header css={{ marginBottom: 8 }}>
        <Text.H4>{props.header}</Text.H4>
      </header>
      {props.children}
    </Surface>
  )
}

function CollapsibleSection(props: PropsWithChildren<{ header: ReactNode; open?: boolean; disabled?: boolean }>) {
  return (
    <Details css={{ padding: '1.6rem' }} open={props.open} disabled={props.disabled}>
      <Details.Summary>
        <Text.H4>{props.header}</Text.H4>
      </Details.Summary>
      <Details.Content>{props.children}</Details.Content>
    </Details>
  )
}