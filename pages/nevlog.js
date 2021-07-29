import Link from 'next/link'

const LogNavbar = () => {
    return (
        <div className="Head">
            <nav className="nav has-shadow">
              <div className="container">
                <div className="nav-left">
                  <Link href='/'>
                    <a className="nav-item"> Home </a>
                  </Link>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </nav>
        </div>
    )
}
export default LogNavbar