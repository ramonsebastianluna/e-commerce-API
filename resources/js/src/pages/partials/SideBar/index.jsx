import { Link } from '@inertiajs/react'

const SideBar = () => {
  return (
    <aside className='fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block'>
      <div className='h-full py-6 pl-8 pr-6 lg:py-8'>
        <h3 className='mb-2 text-lg font-semibold'>Getting Started</h3>
        <div className='flex flex-col space-y-1'>
          <Link href='#introduction' className='text-sm hover:underline'>Introduction</Link>
          {/* <Link href='#authentication' className='text-sm hover:underline'>Authentication</Link> */}
        </div>
        <h3 className='mt-6 mb-2 text-lg font-semibold'>Endpoints</h3>
        <div className='flex flex-col space-y-1'>
          <Link href='#products' className='text-sm hover:underline'>Products</Link>
          {/* <Link href='#categories' className='text-sm hover:underline'>Categories</Link>
          <Link href='#users' className='text-sm hover:underline'>Users</Link> */}
        </div>
      </div>
    </aside>
  )
}

export default SideBar