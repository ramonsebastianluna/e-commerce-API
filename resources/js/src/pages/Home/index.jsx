import AppLayout from '../../layout/AppLayout'
import { Link } from '@inertiajs/react'
import github from '../../assets/github.svg'
import docs from '../../assets/docs.svg'
import Card from '../../components/Card'
import codeExample from '../../data/codeExample'

const Home = () => {
  return (
    <>
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
      <section className='container mx-auto px-4 font-montserrat text-center card-section'>
        <div className='flex flex-wrap justify-center'>
          <Card title='Real-time Data' content='Get pseudo-real data for your e-commerce projects without running server-side code.' />
          <Card title='Easy Integration' content='Simple to use with any frontend framework or vanilla JavaScript.' />
          <Card title='Customizable' content='Tailor the API responses to fit your specific project needs.' />
        </div>
      </section>
      <section className='container mx-auto px-4 py-4 md:py-20 font-montserrat text-center code-example-section'>
        <div className='md:px-6'>
          <div className='card border border-gray-300 p-5 rounded-md mx-2 my-2 text-left font-montserrat hover:shadow-cardShadow'>
            <h2 className='text-2xl font-bold mb-4'>Try it out</h2>
            <pre className='px-4 py-2 bg-gray-100 rounded-md overflow-auto'>
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}

Home.layout = page => <AppLayout children={page} title='Home'/>

export default Home