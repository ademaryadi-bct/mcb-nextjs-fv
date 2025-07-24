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

const publicationData = [
  {
    title: 'Berita',
    href: '/berita'
  },
  {
    title: 'Realisasi Anggaran',
    href: 'https://business-iha.kemenbud.go.id',
    external: true
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

const Publikasi = props => {
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
      blockPointerEvents: true
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
          'text-primary': pathname === '/front-pages/berita' || pathname === '/front-pages/realisasi-anggaran'
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
        <span>Publikasi</span>
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
          {publicationData.map((page, index) =>
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
      </MenuWrapper>
    </Tag>
  )
}

export default Publikasi
