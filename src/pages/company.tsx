import PageLayout from '~/components/layout/page-layout'
import { VStack } from '~/components/layout/stack'
import { DataTable } from '~/components/ui/data-table/data-table'
import { columns } from '~/components/ui/data-table/data-table-column'
import tasks from '~/data/tasks'

const CompanyPage = () => {
  // const tasks = await fetch('src/data/tasks.json')
  // const pathname = usePath()

  return (
    <>
      <PageLayout>
        <VStack className='hidden h-full gap-10 md:flex'>
          <DataTable data={tasks} columns={columns} />
        </VStack>
      </PageLayout>
    </>
  )
}

export default CompanyPage
