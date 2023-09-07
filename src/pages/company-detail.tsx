import React from 'react'
import { usePath } from '~/hooks/usePath'
import { cn } from '~/lib/utils'

interface CompanyDetailProps extends React.HTMLAttributes<HTMLDivElement> {}

const CompanyDetail = ({ className }: CompanyDetailProps) => {
  const path = usePath()

  return (
    <div className={cn('', className)}>
      {/* <ul>
        {path.paths.map((item, index) => {
          return (
            <li
              key={index}
              className={cn('', {
                underline: item === path.lastPath
              })}
            >
              {item}
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default CompanyDetail
