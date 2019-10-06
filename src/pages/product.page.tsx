import { h, Component, Fragment } from 'preact';

export class ProductPage extends Component {
    render() {
        const backgroundImage: string = 'url(http://placehold.it/900x500)';

        return (
            <section className="hero is-medium sarya-banner" style={`background-image: ${ backgroundImage }`}>
                <div className="hero-body"></div>
            </section>
        )
    }
}