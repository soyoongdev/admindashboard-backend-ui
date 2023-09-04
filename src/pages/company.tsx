import { Button, Input } from 'antd'
import HStack from '~/components/layout/stack/hstack'
import VStack from '~/components/layout/stack/vstack'

const Company = () => {
  return (
    <VStack className=''>
      <HStack className='w-full justify-between'>
        <HStack className='sm:flex-col md:flex-row' spacing={2}>
          <div className='flex flex-row items-center gap-2'>
            <label htmlFor='input-name' className='text-dark dark:text-white'>
              Name:
            </label>
            <Input id='input-name' className='bg-dark dark:bg-white' placeholder='Name' />
          </div>
          <div className='flex flex-row items-center gap-2'>
            <label htmlFor='input-address' className='text-dark dark:text-white'>
              Address:
            </label>
            <Input id='input-address' className='input' placeholder='Address' />
          </div>
        </HStack>
        <HStack className='sm:flex-col md:flex-row' spacing={2}>
          <Button type='default' className='text-dark dark:text-white'>
            Reset
          </Button>
          <Button type='default' className='bg-dark text-white dark:bg-light dark:text-dark'>
            Search
          </Button>
        </HStack>
      </HStack>
    </VStack>
  )
}

export default Company
