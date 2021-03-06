import Link from 'next/link'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">Inver - project</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item">
                        <Link href="/Auth">
                            <a className="nav-link" >Ingresar</a>
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Nav