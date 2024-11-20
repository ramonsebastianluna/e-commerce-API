import { useEffect } from 'react'
import Header from '../pages/partials/Header'
import Footer from '../pages/partials/Footer'

const AppLayout = ({children, title}) => {

  useEffect(() => {
    document.title = 'E-Commerce API - ' + title;
  }, [title]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout