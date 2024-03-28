import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { usePresenceContext } from '../presence'
import { usePopoverContext } from './use-popover-context'

export interface PopoverPositionerProps extends HTMLArkProps<'div'> {}

export const PopoverPositioner = forwardRef<HTMLDivElement, PopoverPositionerProps>(
  (props, ref) => {
    const context = usePopoverContext()
    const presenceApi = usePresenceContext()
    const mergedProps = mergeProps(context.positionerProps, props)

    if (presenceApi.isUnmounted) {
      return null
    }

    return <ark.div {...mergedProps} ref={ref} />
  },
)

PopoverPositioner.displayName = 'PopoverPositioner'
