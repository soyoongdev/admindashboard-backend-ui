import React, { forwardRef } from 'react'
import { cn } from '~/lib/utils'

interface HStackProps extends React.HTMLAttributes<HTMLDivElement> {}

const HStack = forwardRef<HTMLDivElement, HStackProps>(({ className, children }, ref) => {
  return (
    <div className={cn('flex flex-row', className)} ref={ref}>
      {children}
    </div>
  )
})

export default HStack
