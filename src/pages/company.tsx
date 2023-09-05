import HStack from '~/components/layout/stack/hstack'
import VStack from '~/components/layout/stack/vstack'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

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
          <Button className='text-dark dark:text-white'>Reset</Button>
          <Button className='bg-dark dark:bg-light dark:text-dark text-white'>Search</Button>
        </HStack>
      </HStack>
    </VStack>
  )
}

export default Company
