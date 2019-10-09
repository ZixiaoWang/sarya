import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

export class ProductPage extends Component {
    render() {
        const backgroundImage: string = 'url(./assets/banner/product.banner.jpeg)';

        return (
            <Fragment>
                <section className="hero is-medium sarya-banner" style={`background-image: ${ backgroundImage }`}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <h3 className="title sarya-banner-title is-3">Products</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column is-9">
                                <h5 className="title has-text-black is-5">Market Connectivity</h5>
                                <p>
                                    Sarya Finsoft has established market connections 
                                    with TFEX (Thailand Futures Exchange) and 
                                    SET (The Stock Exchange Of Thailand)...
                                </p>
                                <p>
                                    <Link href="/product/market-connectivity">
                                        <span className="has-gap">Read more</span>
                                        <i className="ion ion-md-arrow-right has-gap"></i>
                                    </Link>
                                </p>
                            </div>
                            <hr className="has-margin-vertical"/>
                            <div className="column is-9">
                                <h5 className="title has-text-black is-5">Manual Trading</h5>
                                <p>
                                    Our trading solution is specially designed to 
                                    fully match prop traders’ expectations. The traders 
                                    can design their own trading workspace by moving 
                                    different trading widgets to multiple screens and 
                                    pin the ones always on top for close monitoring...
                                </p>
                                <p>
                                    <Link href="/product/manual-trading">
                                        <span className="has-gap">Read more</span>
                                        <i className="ion ion-md-arrow-right has-gap"></i>
                                    </Link>
                                </p>
                            </div>
                            <hr className="has-margin-vertical"/>
                            <div className="column is-9">
                                <h5 className="title has-text-black is-5">Market Making</h5>
                                <p>
                                Market Making view is integrated with market making, underlying, 
                                order entry, market depth, public trades, 
                                pricing and order view. The market maker is 
                                offered some key features...
                                </p>
                                <p>
                                    <Link href="/product/market-making">
                                        <span className="has-gap">Read more</span>
                                        <i className="ion ion-md-arrow-right has-gap"></i>
                                    </Link>
                                </p>
                            </div>
                            <hr className="has-margin-vertical"/>
                            <div className="column is-9">
                                <h5 className="title has-text-black is-5">Strategy Trading</h5>
                                <p>
                                    Our strategy trading....
                                </p>
                                <p>
                                    <Link href="/product/strategy-trading">
                                        <span className="has-gap">Read more</span>
                                        <i className="ion ion-md-arrow-right has-gap"></i>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}