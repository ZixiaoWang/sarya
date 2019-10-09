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
                                <div className="content">
                                    <h3 className="title has-text-black is-3">About</h3>
                                    <p>
                                        <strong>SARYA FINSOFT</strong> is a Hong Kong fintech start-up 
                                        company committed to revolutionize the way of trading and risk 
                                        management. We provide Low-latency Trading Solutions for market 
                                        makers and proprietary traders. We have passed the full conformance 
                                        test of TFEX (Thailand Futures Exchange), and our engineers are 
                                        highly experienced in trading software and data science, with more 
                                        than 20 years' experience.

                                    </p>
                                    <p>
                                        Our solutions that are simple and flexible, highly customizable 
                                        for clients, and built by a team of technology savvy and 
                                        experienced market practitioners using latest technologies 
                                        including machine learning and heterogeneous computation. 
                                        Our goal is to empower our clients’ trading business with the most competitive edge. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}