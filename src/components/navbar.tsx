import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand"></div>
                    <div className="navbar-end">
                        <Link className="navbar-item" href="/">Home</Link>
                        <Link className="navbar-item" href="/about">About</Link>
                        <Link className="navbar-item" href="/technology">Technology</Link>
                        <Link className="navbar-item" href="/product">Product</Link>
                        <Link className="navbar-item" href="/news">News</Link>
                        <Link className="navbar-item" href="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        )
    }
}