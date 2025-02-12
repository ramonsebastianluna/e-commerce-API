import AppLayout from '../../layout/AppLayout'
import SideBar from '../partials/Sidebar'

const Docs = () => {
  return (
    <>
      <div className='container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]'>
        <SideBar/>
        <main  className='relative py-6 lg:py-8'>
          <div className='text-start'>Esta es la página de documentación</div>
        </main>
      </div>
    </>
  )
}

Docs.layout = page => <AppLayout children={page} title='Docs'/>

export default Docs