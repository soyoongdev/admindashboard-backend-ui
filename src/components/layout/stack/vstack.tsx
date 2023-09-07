import React, { forwardRef } from 'react'
import { cn } from '~/lib/utils'

interface VStackProps extends React.HTMLAttributes<HTMLDivElement> {}

const VStack = forwardRef<HTMLDivElement, VStackProps>(({ className, children }, ref) => {
  return (
    <div className={cn('flex flex-col', className)} ref={ref}>
      {children}
    </div>
  )
})

export default VStack
