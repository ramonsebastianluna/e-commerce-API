import { Link } from '@inertiajs/react'

const BurgerMenu = () => {
  return (
    <div className='max-w-6xl mx-auto px-0'>
      <div className='flex justify-between items-center'>
        {/* Mobile menu button */}
        <div className='md:hidden'>
          <input type='checkbox' id='menu-toggle' className='hidden' />
          <label htmlFor='menu-toggle' className='cursor-pointer block p-2 hover:bg-gray-100 rounded-md'>
            <svg className='w-6 h-6' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </label>

          {/* Mobile menu */}
          <div className='absolute top-16 left-0 right-0 shadow-md transition-all duration-300 ease-in-out max-h-0 overflow-hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white'>
              <Link href='/' className='block px-3 py-1 rounded-md text-base font-medium hover:bg-gray-100'>Home</Link>
              <Link href='/docs' className='block px-3 py-1 rounded-md text-base font-medium text-black hover:bg-gray-100'>Docs</Link>
              <a href='https://github.com/ramonsebastianluna' target='_blank' className='block px-3 py-1 rounded-md text-base font-medium text-black hover:bg-gray-100'>Github</a>
              <a href='#' target='_blank' className='inline-block mx-2 py-1 px-2 border border-gray-400 rounded font-bold hover:bg-gray-100'>Buy me a coffee</a>
            </div>
          </div>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center'>
          <Link href='/' className='mx-2 hover:text-gray-500'>Home</Link>
          <Link href='/docs' className='mx-2 hover:text-gray-500'>Docs</Link>
          <a className='mx-2 hover:text-gray-500' href='https://github.com/ramonsebastianluna' target='_blank'>GitHub</a>
          <a className='mx-2 py-1 px-2 border border-gray-400 rounded font-bold hover:bg-gray-100' href='#' target='_blank'>Buy me a coffee</a>
        </div>
      </div>

      <style>
        {`
          #menu-toggle:checked + label + #mobile-menu {
          max-height: 300px;
          }
        `}
      </style>
    </div>
  )
}

export default BurgerMenu;