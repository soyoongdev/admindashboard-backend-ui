import { VStack } from '~/components/layout/stack'
import Breadcrumb from '~/components/ui/breadcrumb'
import { usePath } from '~/hooks/usePath'
import CompanyList from './company-list'

const CompanyPage = () => {
  const path = usePath()

  return (
    <VStack className=''>
      <CompanyList />
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
      <Breadcrumb />
    </VStack>
  )
}

export default CompanyPage
