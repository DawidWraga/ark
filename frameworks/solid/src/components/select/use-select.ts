import type { CollectionOptions } from '@zag-js/select'
import * as select from '@zag-js/select'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/solid'
import { type Accessor, createMemo, createUniqueId } from 'solid-js'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { CollectionItem, Optional } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'

export interface UseSelectProps<T extends CollectionItem>
  extends CollectionOptions<T>,
    Optional<
      Omit<select.Context<T>, 'collection' | 'dir' | 'getRootNode' | 'open.controlled'>,
      'id'
    > {}

export interface UseSelectReturn<T extends CollectionItem>
  extends Accessor<select.Api<PropTypes, T>> {}

export const useSelect = <T extends CollectionItem>(
  props: UseSelectProps<T>,
): UseSelectReturn<T> => {
  const [collectionOptions, rest] = createSplitProps<CollectionOptions<T>>()(props, [
    'isItemDisabled',
    'itemToValue',
    'itemToString',
    'items',
  ])

  const collection = () => select.collection(collectionOptions)

  const locale = useLocaleContext()
  const environment = useEnvironmentContext()

  const initialContext: select.Context = {
    id: createUniqueId(),
    collection: collection(),
    ...rest,
  }

  const [state, send] = useMachine(select.machine(initialContext), {
    context: createMemo(() => ({
      ...rest,
      collection: collection(),
      dir: locale().dir,
      getRootNode: environment().getRootNode,
      'open.controlled': props.open !== undefined,
    })),
  })

  return createMemo(() => select.connect<PropTypes, T>(state, send, normalizeProps))
}
