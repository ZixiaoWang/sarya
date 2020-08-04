import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class MarketConnectivityPage extends Component {
    render() {
        return (
            <Fragment>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <nav className="breadcrumb sarya-breadcrumb" aria-label="breakcrumbs">
                                        <ul>
                                            <li>
                                                <Link href="/product">
                                                    <i className="ion ion-md-arrow-back has-gap"></i>
                                                    <span className="has-gap">Product</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-9">
                                    <h3 className="title has-text-black is-3">Market Connectivity</h3>
                                    <p>
                                        Native Gateways
                                    </p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="content">
                                        <label className="label">CME Group</label>
                                        <ul>
                                            <li>Certified by CME Group for both iLink 2.x market access and MDP 3.0 market data</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="content">
                                        <label className="label">TFEX (Thailand Futures Exchange)</label>
                                        <ul>
                                            <li>Certified since 1st August, 2020</li>
                                            <li>Native EMAPI</li>
                                            <li>Support all Order Types</li>
                                            <li>Page by Page Quoting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="content">
                                        <label className="label">SET (The Stock Exchange Of Thailand)</label>
                                        <ul>
                                            <li>Certification in progress</li>
                                            <li>Native EMAPI</li>
                                            <li>Support all Order Types</li>
                                            <li>Page by Page Quoting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}