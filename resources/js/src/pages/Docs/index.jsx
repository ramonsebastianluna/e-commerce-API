import AppLayout from "../../layout/AppLayout"

const Docs = () => {
  return (
    <main>
      <div>Esta es la página de documentación</div>
    </main>
  )
}

Docs.layout = page => <AppLayout children={page} title='Docs'/>

export default Docs