'use client'

import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { Icon } from '@iconify/react'
import { Input } from '@nextui-org/input'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      key: 'Categorías',
      label: 'Categorías',
      href: '/categorias'
    },
    {
      key: 'ayuda',
      label: 'Ayuda & Feedback',
      href: '/login',
      isExternal: true
    },
    {
      key: 'HarkaySoft',
      label: 'Contactar con HarkaySoft',
      href: '/login',
      isExternal: true
    }
  ]
  return (
    <Navbar
      className='bg-light-background/50 dark:bg-dark-background/50 text-light-onSurface dark:text-dark-onSurface'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand as={Link} href='/' onClick={() => setIsMenuOpen(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='28'
            className='text-light-onSurface dark:text-dark-onSurface'
            viewBox='0 0 24 24'
          >
            <g fill='none' fillRule='evenodd'>
              <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
              <path
                fill='currentColor'
                d='M17.5 3a2 2 0 0 1 1.6.8l2.688 3.584a.995.995 0 0 1 .204.616H22v1a3.99 3.99 0 0 1-1 2.646V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.354A3.985 3.985 0 0 1 2 9V8h.008a.995.995 0 0 1 .204-.616L4.9 3.8A2 2 0 0 1 6.5 3zM15 11.646A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354a3.99 3.99 0 0 1-3.757 1.282L5 12.874V19h14v-6.126l-.243.054A3.99 3.99 0 0 1 15 11.645ZM20 9h-4a2 2 0 0 0 3.995.15zm-6 0h-4a2 2 0 0 0 3.995.15zM8 9H4a2 2 0 0 0 3.995.15zm9.5-4h-11L5 7h14z'
              />
            </g>
          </svg>
          <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
            ronal
          </span>
          <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
            Tienda
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {/* <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent text-light-onSurface dark:text-dark-onSurface text-base'
                endContent={
                  <Icon
                    icon='icon-park-outline:down'
                    width='16'
                    height='16'
                    className='text-light-onSurface dark:text-dark-onSurface'
                  />
                }
                radius='sm'
                variant='light'
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME features'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4'
            }}
          >
            <DropdownItem
              key='autoscaling'
              description='ACME scales apps to meet user demand, automagically, based on load.'
              startContent={
                <Icon
                  icon='material-symbols:store'
                  width='16'
                  height='16'
                  className='text-light-onSurface dark:text-dark-onSurface'
                />
              }
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Overcome any challenge with a supporting team ready to respond.'
              startContent={
                <Icon
                  icon='material-symbols:store'
                  width='16'
                  height='16'
                  className='text-light-onSurface dark:text-dark-onSurface'
                />
              }
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}

        <NavbarItem>
          <Link
            href='/categorias'
            aria-current='page'
            className='text-light-primary dark:text-dark-primary'
          >
            Categorias
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            href='#'
            className='text-light-onSurface dark:text-dark-onSurface'
          >
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
            }}
            placeholder='Buscar...'
            size='sm'
            startContent={
              <Icon
                icon='mdi:magnify'
                width='18'
                height='18'
                className='text-light-onSurface dark:text-dark-onSurface'
              />
            }
            type='search'
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='bg-white/10'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.key}>
            <Link
              className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
              href={item.href}
              isExternal={item.isExternal}
              onClick={() => setIsMenuOpen(false)}
              size='lg'
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
