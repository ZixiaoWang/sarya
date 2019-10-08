import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class MarketMakingPage extends Component {
    render () {
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
                                        <h3 className="title has-text-black is-3">Market Making</h3>
                                        <p>
                                            Market Making view is integrated with market making, 
                                            underlying, order entry, market depth, public trades, 
                                            pricing and order view. The market maker is offered some key features,
                                        </p>
                                        <figure className="image">
                                            <img src="./assets/webpage/market_making.png" alt="Market Making"/>
                                        </figure>
                                        <p>
                                            <strong>Quote Instrument Types: </strong>
                                            <span>Quote by Futures, Options, Warrants.</span>
                                        </p>
                                        <p>
                                            <strong>Quote by Page: </strong>
                                            <span>Highly-correlated instruments reside in the same page are put in the same quote message</span>
                                        </p>
                                        <p>
                                            <strong>Multiple-Row Per Strike: </strong>
                                            <span>The T type layout of options makes screen space use inefficient, per strike CALL and PUT options in multiple rows present information much easier to address.</span>
                                        </p>
                                        <p>
                                            <strong>Excel-Like Editing: </strong>
                                            <span>Parameter editing is close to excel, edit and commit, edit and undo.</span>
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