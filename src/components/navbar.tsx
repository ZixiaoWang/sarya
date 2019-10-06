import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class NavbarComponent extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <div className="navbar-item">
                                <img src="./assets/images/sarya_logo.png" alt="Sarya Fintech" />
                            </div>
                        </div>
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <strong>Trading with an edge</strong>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="navbar sarya-subnavbar">
                    <div className="container">
                        <div className="navbar-brand"></div>
                        <div className="navbar-start">
                            <Link className="navbar-item" href="/">
                                <i className="ion ion-md-home has-gap"></i>
                                <span className="has-gap">Home</span>
                            </Link>
                            <Link className="navbar-item" href="/technology">
                                <i className="ion ion-md-flask has-gap"></i>
                                <span className="has-gap">Technology</span>
                            </Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link className="navbar-link" href="/product">
                                    <i className="ion ion-md-trending-up has-gap"></i>
                                    <span className="has-gap">Products</span>
                                </Link>
                                <div class="navbar-dropdown is-boxed">
                                    <Link className="navbar-item" href="/product/market-connectivity">Market Connectivity</Link>
                                    <Link className="navbar-item" href="/product/manual-trading">Manual Trading</Link>
                                    <Link className="navbar-item" href="/product/market-making">Market Making</Link>
                                    <Link className="navbar-item" href="/product/strategy-trading">Strategy Trading</Link>
                                </div>
                            </div>
                            <Link className="navbar-item" href="/news">
                                <i className="ion ion-md-text has-gap"></i>
                                <span className="has-gap">News</span>
                            </Link>
                            <Link className="navbar-item" href="/contact">
                                <i className="ion ion-md-call has-gap"></i>
                                <span className="has-gap">Contacts</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}