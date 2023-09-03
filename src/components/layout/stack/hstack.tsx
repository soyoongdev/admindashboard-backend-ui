import React, { forwardRef } from 'react'
import { cn } from '~/utils/cn'

interface HStackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number | undefined
}

const HStack = forwardRef<HTMLDivElement, HStackProps>(
  ({ spacing, className, children }, ref) => {
    return (
      <div className={cn(`flex flex-row gap-${spacing}`, className)} ref={ref}>
        {children}
      </div>
    )
  }
)

export default HStack
