import type { DayTableCellProps, TableCellProps } from '@zag-js/date-picker'
import { createContext } from '../create-context'

type Union<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] | T[K] : T[K]
} & Omit<U, keyof T>

type CellProps = Union<DayTableCellProps, TableCellProps>

export interface UseDatePickerTableCellContext extends CellProps {}

export const [DatePickerTableCellProvider, useDatePickerTableCellContext] =
  createContext<UseDatePickerTableCellContext>({
    name: 'DatePickerTableCellContext',
    hookName: 'useDatePickerTableCellContext',
    providerName: '<DatePickerTableCellProvider />',
  })
