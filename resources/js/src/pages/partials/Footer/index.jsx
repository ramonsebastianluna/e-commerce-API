const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} E-Commerce API. All rights reserved.</p>
    </footer>
  )
}

export default Footer;