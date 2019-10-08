import { h, Component, Fragment } from 'preact';

export class HomePage extends Component {
    render() {
        const backgroundImage: string = 'url(./assets/banner/home.banner.jpeg)';
        return (
            <Fragment>
                <section className="hero is-medium sarya-banner" style={`background-image: ${ backgroundImage }`}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <h1 className="title has-text-black is-1 sarya-banner-title">Sarya Finsoft</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-9">
                                <h3 className="title has-text-black is-3">About</h3>
                                <p>
                                    <strong>SARYA FINSOFT</strong> is a Hong Kong fintech start-up company 
                                    committed to revolutionize the way of trading and risk 
                                    management. We provide High Frequency Trading Solutions 
                                    for market makers and proprietary traders to trade with an 
                                    edge. We are passionate to apply latest trading technologies 
                                    and advanced technics to enable our clients with low latency 
                                    market access, ease of use and high automation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}