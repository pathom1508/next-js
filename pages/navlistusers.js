import Link from 'next/link'

const ListNavnar = () => {
    return (
        <div className="Head">
            <nav className="nav has-shadow">
              <div className="container">
                <div className="nav-right">
                  <Link href='/'>
                    <a className="nav-item"> Logout </a>
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
export default ListNavnar