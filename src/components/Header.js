export default function Header() {
    return (
        <header>
            <h3>Welcome to my Portfolio!</h3>
            <h1 id="home">Home</h1>
            {/*This section creates a navbar*/}
            <nav>
                <ul>
                    <li><a className="active" href="#section-1">Home</a></li>
                    <li><a href="#section-2">About me</a></li>
                    <li><a href="#section-3">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}