import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import superData from '~/data'
import { publicRoutes } from '~/lib/routes'
import { cn } from '~/lib/utils'

const CompanyList = () => {
  const location = useLocation()

  return (
    <div className='flex flex-col'>
      <ul className='flex flex-row gap-2'>
        {superData.company.map((item, index) => {
          return (
            <li key={index} className=''>
              <Link
                className={cn('rounded-md p-2 hover:bg-secondary', {
                  'bg-secondary': location.pathname === `${publicRoutes[1].path}/${item.companyID}`
                })}
                to={`${item.companyID}`}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </div>
  )
}

export default CompanyList
