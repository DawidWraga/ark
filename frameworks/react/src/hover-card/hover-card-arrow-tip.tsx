import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { useHoverCardContext } from './use-hover-card-context'

export interface HoverCardArrowTipProps extends HTMLArkProps<'div'> {}

export const HoverCardArrowTip = forwardRef<HTMLDivElement, HoverCardArrowTipProps>(
  (props, ref) => {
    const context = useHoverCardContext()
    const mergedProps = mergeProps(context.arrowTipProps, props)

    return <ark.div {...mergedProps} ref={ref} />
  },
)

HoverCardArrowTip.displayName = 'HoverCardArrowTip'
