import BurgerMenu from '../../../components/BurguerMenu'

const Header = () => {
  return (
    <header className='container mx-auto p-4 font-montserrat'>
      <div className='flex justify-between'>
        <div className='content-center'>
          <h2 className='text-2xl font-bold'>E-Commerce API</h2>
        </div>
        <nav className='text-black content-center'>
          <BurgerMenu/>
        </nav>
      </div>
    </header>
  )
}

export default Header