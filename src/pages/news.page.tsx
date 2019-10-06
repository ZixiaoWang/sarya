import { h, Component, Fragment } from 'preact';

export class NewsPage extends Component {
    render() {
        const backgroundImage: string = 'url(http://placehold.it/900x500)';

        return (
            <section className="hero is-medium sarya-banner" style={`background-image: ${ backgroundImage }`}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <h3 className="title is-3">News</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}