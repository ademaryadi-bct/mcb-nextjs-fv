// React Imports
import { Fragment, useEffect, useState } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'

// Third-party Imports
import classnames from 'classnames'
import {
  useFloating,
  useDismiss,
  useRole,
  useInteractions,
  useHover,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
  safePolygon,
  useTransitionStyles
} from '@floating-ui/react'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'

// Constants
const pageData = [
  {
    title: 'Profil Lembaga',
    href: '/profil-lembaga'
  },
  {
    title: 'Struktur Organisasi',
    href: '/struktur-organisasi'
  },
  {
    title: 'Visi & Misi',
    href: '/visi-misi'
  }
]

const layananData = [
  {
    title: 'Layanan Ticket Museum',
    href: '/layanan-ticket-museum'
  },
  {
    title: 'Layanan Ticket Event',
    href: '/layanan-ticket-event'
  },
  {
    title: 'Collection Management System',
    href: 'https://iha.kemenbud.go.id',
    external: true
  },
  {
    title: 'Layanan Konservasi',
    href: '/layanan-konservasi'
  },
  {
    title: 'Layanan Penyewaan Venue dan Alat',
    href: '/layanan-venue-alat'
  }
]

const supportData = [
  {
    title: 'Volunteer / Magang',
    href: '/volunteer'
  },
  {
    title: 'MCB Shop',
    href: '/shop'
  },
  {
    title: 'Hubungi Kami',
    href: '/hubungi-kami'
  }
]

const sopData = [
  {
    title: 'Peraturan',
    href: '/peraturan'
  },
  {
    title: 'SOP',
    href: '/sop'
  }
]

const authData = [
  {
    title: 'Layanan Bisnis',
    href: '/login-v1'
  },
  {
    title: 'Collection Management System',
    href: '/login-v2'
  },
  {
    title: 'Layanan Konservasi',
    href: '/register-v1'
  }
]

const othersDataMenu = [
  {
    title: 'Under Maintenance',
    href: '/misc/under-maintenance'
  },
  {
    title: 'Coming Soon',
    href: '/misc/coming-soon'
  },
  {
    title: 'Not Authorized',
    href: '/misc/401-not-authorized'
  },
  {
    title: 'Verify Email (Basic)',
    href: '/auth/verify-email-v1'
  },
  {
    title: 'Verify Email (Cover)',
    href: '/auth/verify-email-v2'
  },
  {
    title: 'Two Steps (Basic)',
    href: '/auth/two-steps-v1'
  },
  {
    title: 'Two Steps (Cover)',
    href: '/auth/two-steps-v2'
  }
]

const MenuWrapper = props => {
  // Props
  const { children, refs, isBelowLgScreen, isOpen, getFloatingProps, top, floatingStyles, isMounted, styles } = props

  if (!isBelowLgScreen) {
    return (
      <FloatingPortal>
        {isMounted && (
          <div ref={refs.setFloating} className='z-[1201] lg:z-[1100]' {...getFloatingProps()} style={floatingStyles}>
            <div
              className='flex gap-8 p-8'
              style={{
                ...styles,
                overflowY: 'auto',
                background: 'var(--mui-palette-background-paper)',
                minWidth: 100,
                borderRadius: 'var(--mui-shape-borderRadius)',
                outline: 0,
                boxShadow: 'var(--mui-shadows-3)',
                maxBlockSize: `calc((var(--vh, 1vh) * 100) - ${top}px)`,
                marginTop: '10px'
              }}
            >
              {children}
            </div>
          </div>
        )}
      </FloatingPortal>
    )
  }

  return (
    <Collapse in={isOpen}>
      <div className='flex flex-col gap-6 mbs-3'>{children}</div>
    </Collapse>
  )
}

const TentangKami = props => {
  // Props
  const { isBelowLgScreen, isDrawerOpen, setIsDrawerOpen } = props

  // states
  const [isOpen, setIsOpen] = useState(false)

  // hooks
  const pathname = usePathname()

  const { y, refs, floatingStyles, context } = useFloating({
    placement: 'bottom',
    open: isOpen,
    ...(!isBelowLgScreen && { onOpenChange: setIsOpen }),
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(14),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`
          })
        },
        padding: 10
      })
    ]
  })

  // Floating UI Transition Styles
  const { isMounted, styles } = useTransitionStyles(context, {
    // Configure both open and close durations:
    duration: 300,
    initial: {
      opacity: 0,
      transform: 'translateY(10px)'
    },
    open: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    close: {
      opacity: 0,
      transform: 'translateY(10px)'
    }
  })

  const hover = useHover(context, {
    handleClose: safePolygon({
      blockPointerEvents: false
    }),

    restMs: 25,
    delay: { open: 50 }
  })

  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'menu' })
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, role, hover])
  const Tag = isBelowLgScreen ? 'div' : Fragment

  const handleLinkClick = () => {
    if (isBelowLgScreen) {
      isDrawerOpen && setIsDrawerOpen(false)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (!isDrawerOpen && isOpen) {
      setIsOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawerOpen])

  return (
    <Tag {...(isBelowLgScreen && { className: 'flex flex-col' })}>
      <Typography
        component={Link}
        color='text.primary'
        className={classnames('flex items-center gap-2 font-medium plb-3 pli-1.5 hover:text-primary', {
          'text-primary':
            pathname === '/front-pages/profil-lembaga' ||
            pathname === '/front-pages/struktur-organisasi' ||
            pathname === '/front-pages/visi-misi' ||
            pathname === '/front-pages/layanan-ticket-museum' ||
            pathname === '/front-pages/layanan-ticket-event' ||
            pathname.startsWith('/front-pages/layanan-ticket-event/') ||
            pathname === '/front-pages/layanan-konservasi' ||
            pathname === '/front-pages/layanan-venue-alat' ||
            pathname === '/front-pages/volunteer' ||
            pathname === '/front-pages/shop' ||
            pathname === '/front-pages/shop/category' ||
            pathname === '/front-pages/hubungi-kami' ||
            pathname === '/front-pages/peraturan' ||
            pathname === '/front-pages/sop' ||
            pathname.startsWith('/front-pages/shop/category')
        })}
        {...(isBelowLgScreen
          ? {
              onClick: e => {
                e.preventDefault()
                setIsOpen(!isOpen)
              }
            }
          : {
              ref: refs.setReference,
              ...getReferenceProps()
            })}
      >
        <span>Tentang Kami</span>
        <i
          className={classnames(
            {
              'tabler-chevron-down': !isBelowLgScreen || (isBelowLgScreen && !isOpen),
              'tabler-chevron-up': isBelowLgScreen && isOpen
            },
            'text-xl'
          )}
        />
      </Typography>
      <MenuWrapper
        refs={refs}
        isBelowLgScreen={isBelowLgScreen}
        isOpen={isOpen}
        getFloatingProps={getFloatingProps}
        top={y ? y - window.scrollY : 0}
        floatingStyles={floatingStyles}
        isMounted={isMounted}
        styles={styles}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex gap-3 items-center'>
            <CustomAvatar variant='rounded' color='primary' skin='light'>
              <i className='tabler-layout-grid' />
            </CustomAvatar>
            <Typography variant='h6'>Profil</Typography>
          </div>
          {pageData.map((page, index) => (
            <Link
              key={index}
              href={'/front-pages' + page.href}
              className={classnames('flex items-center gap-3 focus:outline-none hover:text-primary', {
                'text-primary': pathname.includes('/front-pages' + page.href)
              })}
              onClick={handleLinkClick}
            >
              <i className='tabler-circle text-[10px]' />
              <span>{page.title}</span>
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-3 items-center'>
            <CustomAvatar variant='rounded' color='primary' skin='light'>
              <i className='tabler-layout-grid' />
            </CustomAvatar>
            <Typography variant='h6'>Layanan</Typography>
          </div>
          {layananData.map((page, index) =>
            page.external ? (
              <Link
                key={index}
                href={page.href}
                target='_blank'
                passHref={true}
                className='flex items-center gap-3 focus:outline-none hover:text-primary'
                onClick={handleLinkClick}
              >
                <i className='tabler-circle text-[10px]' />
                <span>{page.title}</span>
              </Link>
            ) : (
              <Link
                key={index}
                href={'/front-pages' + page.href}
                className={classnames('flex items-center gap-3 focus:outline-none hover:text-primary', {
                  'text-primary': pathname.includes('/front-pages' + page.href)
                })}
                onClick={handleLinkClick}
              >
                <i className='tabler-circle text-[10px]' />
                <span>{page.title}</span>
              </Link>
            )
          )}
        </div>
        <div className='flex flex-col gap-4 '>
          <div className='flex gap-3 items-center'>
            <CustomAvatar variant='rounded' color='primary' skin='light'>
              <i className='tabler-layout-grid' />
            </CustomAvatar>
            <Typography variant='h6'>Dukung Kami</Typography>
          </div>
          {supportData.map((page, index) => (
            <Link
              key={index}
              href={'/front-pages' + page.href}
              className={classnames('flex items-center gap-3 focus:outline-none hover:text-primary', {
                'text-primary': pathname.includes('/front-pages' + page.href)
              })}
              onClick={handleLinkClick}
            >
              <i className='tabler-circle text-[10px]' />
              <span>{page.title}</span>
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <CustomAvatar variant='rounded' color='primary' skin='light'>
              <i className='tabler-layout-grid' />
            </CustomAvatar>
            <Typography variant='h6'>Peraturan & SOP</Typography>
          </div>
          {sopData.map((page, index) => (
            <Link
              key={index}
              href={'/front-pages' + page.href}
              className={classnames('flex items-center gap-3 focus:outline-none hover:text-primary', {
                'text-primary': pathname.includes('/front-pages' + page.href)
              })}
              onClick={handleLinkClick}
            >
              <i className='tabler-circle text-[10px]' />
              <span>{page.title}</span>
            </Link>
          ))}
        </div>
      </MenuWrapper>
    </Tag>
  )
}

export default TentangKami
