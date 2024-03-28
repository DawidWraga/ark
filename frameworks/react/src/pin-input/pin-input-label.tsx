import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { usePinInputContext } from './use-pin-input-context'

export interface PinInputLabelProps extends HTMLArkProps<'label'> {}

export const PinInputLabel = forwardRef<HTMLLabelElement, PinInputLabelProps>((props, ref) => {
  const context = usePinInputContext()
  const mergedProps = mergeProps(context.labelProps, props)

  return <ark.label {...mergedProps} ref={ref} />
})

PinInputLabel.displayName = 'PinInputLabel'
