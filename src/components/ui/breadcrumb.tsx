import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { usePath } from '~/hooks/usePath'
import { cn } from '~/lib/utils'

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode | '/'
}

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(({ separator = '/' }, ref) => {
  const path = usePath()

  return (
    <section ref={ref} className='flex flex-col'>
      <nav className='flex flex-row gap-2'>
        <ol className='flex flex-wrap items-center gap-2 text-muted-foreground'>
          {path.paths.map((route, index) => {
            const routeTo = `/${path.paths.slice(0, index + 1).join('/')}`
            const isLast = path.paths.length - 1 === index
            return (
              <li key={index} className='flex flex-row items-center gap-2'>
                {isLast ? (
                  <span className='text-foreground'>{route}</span>
                ) : (
                  <Link
                    className='flex h-[22px] items-center rounded-sm px-[4px] hover:bg-muted hover:text-foreground'
                    to={routeTo}
                  >
                    {route}
                  </Link>
                )}
                <span
                  className={cn('select-none', {
                    hidden: isLast
                  })}
                >
                  {separator}
                </span>
              </li>
            )
          })}
        </ol>
      </nav>
    </section>
  )
})

{
  /* <li key={index}>
                  {path.paths.length - 1 === index ? (
                    <span key={index} className='text-muted-foreground'>
                      {route}
                    </span>
                  ) : (
                    <span>
                      <Link className='text-primary underline-offset-4 hover:underline' to={routeTo}>
                        {route}
                      </Link>
                    </span>
                  )}
                </li> */
}
// {isLast ? <li key={index}></li> : <li key={index}></li>}

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb
