import AppLayout from '../../layout/AppLayout'
import { Link } from '@inertiajs/react'
import github from '../../assets/github.svg'
import docs from '../../assets/docs.svg'

const Home = () => {
  return (
    <main className='container mx-auto px-4 font-montserrat text-center'>
      <div className='content-center min-h-550'>
        <h1 className='text-4xl md:text-6xl font-bold py-5'>Your Modern API Solution</h1>
        <p className='font-semibold text-gray-500 py-5 md:p-5 text-1xl md:text-2xl'>A complete REST API for your next-gen e-commerce or shopping website prototype</p>
        <a
          href='https://github.com/ramonsebastianluna' 
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center bg-black text-white rounded my-3 md:my-5 mx-2 px-4 py-2 hover:bg-gray-800 hover:transform hover:scale-105 transition duration-300 ease-in-out'>
            <span className='pe-2'><img className='w-5' src={github} alt="github image"/></span>View on GitHub
        </a>
        <Link
          href='/docs'
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center bg-gray-100 rounded my-3 md:my-5 mx-2 px-4 py-2 hover:transform hover:scale-105 transition duration-300 ease-in-out'>
            <span className='pe-2'><img className='w-5' src={docs} alt="docs image" /></span>Read Docs
        </Link>
      </div>
    </main>
  )
}

Home.layout = page => <AppLayout children={page} title='Home'/>

export default Home