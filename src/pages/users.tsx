import { Input } from 'antd'

const Users = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row bg-muted'>
        <div className='flex flex-row gap-1'>
          <Input placeholder='Basic usage' />
        </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Users
