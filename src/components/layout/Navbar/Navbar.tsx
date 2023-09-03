import type { MenuProps } from 'antd'
import { Button, Badge, Avatar, Dropdown, Divider } from 'antd'
import { Bell, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          2nd menu item
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          3rd menu item
        </a>
      )
    }
  ]

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex h-fit min-h-[80px] w-full flex-row justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-start text-3xl font-bold text-dark dark:text-white'>
            Manage your projects
          </h1>
          <p className='text-muted dark:text-light'>
            Track your projects, tasks & team activity here
          </p>
        </div>
        <div className='flex w-fit flex-row items-center gap-5'>
          <Dropdown
            menu={{ items }}
            placement='bottomRight'
            trigger={['click']}
          >
            <Button
              size='middle'
              className='flex items-center justify-center border-muted bg-secondary'
              shape='circle'
              type='default'
            >
              <Badge size='small' dot>
                <Bell className='text-white' size={16} />
              </Badge>
            </Button>
          </Dropdown>
          <Dropdown
            menu={{ items }}
            placement='bottomRight'
            trigger={['click']}
          >
            <div className='flex cursor-pointer flex-row items-center gap-1'>
              <Button
                type='default'
                className='flex items-center justify-center border-muted'
                size='large'
                shape='circle'
              >
                <Avatar
                  shape='circle'
                  size='large'
                  icon={<img src='/src/assets/haunguyen.jpg' />}
                />
              </Button>
              <ChevronDown />
            </div>
          </Dropdown>
        </div>
      </div>
      <Divider className='h-[2px] bg-muted dark:bg-white' />
    </div>
  )
}

export default Navbar
