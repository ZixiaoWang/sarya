import { h, Component, Fragment } from 'preact';

export class NewsPage extends Component {
    render() {
        const backgroundImage: string = 'url(./assets/banner/news.banner.jpeg)';

        return (
            <Fragment>
                <section className="hero is-medium sarya-banner" style={`background-image: ${backgroundImage}`}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <h3 className="title sarya-banner-title is-3">News</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-9">

                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="title has-text-black is-4">
                                                    SARYA is proud to be certified by CME Group
                                                </p>
                                                <p className="subtitle is-6">July 22, 2020</p>
                                                <hr />
                                                <p>
                                                    SARYA FINSOFT is proud to announce that the firm is certified by 
                                                    CME Group for both iLink 2.x market access and MDP 3.0 market data.
                                                </p>
                                                <p>
                                                    The certificate enables us to deliver very low-latency and stable 
                                                    CME market data and trading opportunities to our clients in the 
                                                    region. Especially, our current clients trading precious metals are 
                                                    now immediately powered to COMEX with great trading functionality, 
                                                    speed and stability.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="title has-text-black is-4">
                                                    Partnership with Ausiris Co., Ltd for building Algo Strategy Trading component for TFEX
                                                </p>
                                                <p className="subtitle is-6">September, 2019</p>
                                                <hr />
                                                <p>
                                                    Sarya has partnered with Ausiris Co., Ltd. (Ausiris),
                                                    Thailand’s top gold bullion house to build Algo Strategy
                                                    Trading component for TFEX (Thailand Futures Exchange).
                                                </p>
                                                <p>
                                                    Sarya will leverage YAS Pro Trader Programme Trading Workstations
                                                    for Ausiris to build tailor-made prop trading tools for
                                                    active market making empowered by data analytics. Future
                                                    projects also include building Next-generation Trading Platform
                                                    using Heterogeneous Computing and Machine Learning.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="box">
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="title has-text-black is-4">
                                                    Partnership with Classic Ausiris for the Next-generation Professional Trading Platform.
                                                </p>
                                                <p className="subtitle is-6">July 1st, 2019</p>
                                                <hr />
                                                <p>
                                                    Sarya is happy to announce a partnership with Classic
                                                    Ausiris Investment Advisory Securities Co.,Ltd. (“CAF”)
                                                    for the Next-generation Professional Trading Platform.
                                                </p>
                                                <p>
                                                    Sarya will provide Classic Ausiris, who is member of
                                                    Thailand Futures Exchange (TFEX), and one of the top
                                                    futures brokers in Thailand, tailor-made solutions
                                                    including YAS TFEX Connectivity, Market Data and Order
                                                    Sending connectivity to TFEX, and YAS Market Making
                                                    workstations for Futures and Options.
                                                </p>
                                                <p>
                                                    This partnership is another important step for Sarya
                                                    towards our goal of being the best technological partner
                                                    for professional traders with our proven superior execution
                                                    capability to capture market opportunity by low-latency market access.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}