import { useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'

export function useWidth() {
  const width = useCallback(
    (min: number, max: number) => {
      const width = useMediaQuery({
        ...(min ? { minWidth: min } : {}),
        ...(max ? { maxWidth: max } : {})
      })

      return width
    },

    []
  )
  return width
}
