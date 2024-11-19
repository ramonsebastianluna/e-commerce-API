import { Link } from '@inertiajs/react'

const Header = () => {
  return (
    <header>
        <div>
            <div>
                <h2>E-Commerce API</h2>
            </div>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/docs'>Docs</Link>
                <a href='https://github.com' target='_blank'>GitHub</a>
                <button>Buy me a coffee</button>
            </nav>
        </div>
    </header>
  )
}

export default Header