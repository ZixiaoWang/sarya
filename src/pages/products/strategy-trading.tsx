import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class StrategyTradingPage extends Component {
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
                                    <div className="content">
                                        <h3 className="title is-3">Strategy Trading</h3>
                                        <p>
                                            Coming soon...
                                        </p>
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