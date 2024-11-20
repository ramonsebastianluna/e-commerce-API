import AppLayout from '../../layout/AppLayout'

const Home = () => {
  return (
    <main>
      <div>Esta es la home de react en laravel con inertia js</div>
    </main>
  )
}

Home.layout = page => <AppLayout children={page} title='Home'/>

export default Home