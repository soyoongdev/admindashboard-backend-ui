import React, { forwardRef } from 'react'
import { cn } from '~/utils/cn'

interface VStackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number | undefined
}

const VStack = forwardRef<HTMLDivElement, VStackProps>(
  ({ spacing, className, children }, ref) => {
    return (
      <div className={cn(`flex flex-col gap-${spacing}`, className)} ref={ref}>
        {children}
      </div>
    )
  }
)

export default VStack
