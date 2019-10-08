import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class ManualTradingPage extends Component {
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
                                        <h3 className="title has-text-black is-3">Manual Trading</h3>
                                        <p>
                                            Our trading solution is specially designed to fully 
                                            match prop traders’ expectations. The traders 
                                            can design their own trading workspace by moving 
                                            different trading widgets to multiple screens and 
                                            pin the ones always on top for close monitoring.
                                        </p>
                                        <figure className="image">
                                            <img src="./assets/webpage/layout.png" alt="Layout"/>
                                        </figure>
                                        <p>
                                            For keyboard-only traders, shortcuts are fully customizable 
                                            and even possible to assign shortcuts for trading widgets to 
                                            switch from one to another. Order entry widget integrates order 
                                            input, market specifics, market depth, public trades, positions 
                                            and PnL. Order input is just 2 key stroks, BUY/SELL shortcut 
                                            and ENTER, the rest are all automatically filled with default.
                                        </p>
                                        <figure className="image">
                                            <img src="./assets/webpage/order_entry.png" alt="Order Entry"/>
                                        </figure>
                                        <p>
                                            The orders sent from the order entry widget are possible to be 
                                            cancelled directly from the widget via pre-defined shortcut 
                                            keys to avoid extra time to switch to order view widget.
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