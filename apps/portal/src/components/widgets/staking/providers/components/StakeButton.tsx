import type { ButtonProps } from '@talismn/ui'
import { Button } from '@talismn/ui'
import { Zap } from '@talismn/web-icons'
import { type ElementType } from 'react'

const StakeButton = <T extends ElementType>(props: Omit<ButtonProps<T>, 'children'>) => (
  // @ts-expect-error
  <Button {...props} variant="surface" leadingIcon={<Zap />} css={theme => ({ color: theme.color.primary })}>
    Stake
  </Button>
)

export default StakeButton