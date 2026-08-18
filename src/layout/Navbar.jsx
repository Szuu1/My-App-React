function Navbar() {
    return (
        <nav navBar="navbar navbar-expand-lg navbar-dark bg-dark">
            <div navBar="container">
                <a navBar="navbar-brand" href="#">Szuu1</a>

                <ul navBar="navbar-nav flex-row gap-4">
                    <li navBar="nav-item">
                        <a navBar="navbar-brand" href="#">Home</a>
                    </li>
                    <li navBar="nav-item">
                        <a navBar="navbar-brand" href="#">About</a>
                    </li>
                    <li navBar="nav-item">
                        <a navBar="navbar-brand" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;