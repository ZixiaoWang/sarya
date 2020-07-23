import { h, Component, Fragment } from 'preact';

declare const ol: any;
export class ContactPage extends Component {

    componentDidMount() {
        var map = new ol.Map({
            target: 'our_location',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([114.155985, 22.281533]),
                zoom: 16
            })
        });
    }

    render() {
        const backgroundImage: string = 'url(./assets/banner/contact.banner.jpeg)';

        return (
            <Fragment>
                <section className="hero is-medium sarya-banner" style={`background-image: ${backgroundImage}`}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <h3 class="title sarya-banner-title is-3">Contact Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="contact-card">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-7">
                                    <div className="sarya-card">
                                        <div id="our_location" className="contact-map"></div>
                                    </div>
                                </div>
                                <div class="column is-5">
                                    <div className="sarya-card">
                                        <div className="media">
                                            <div className="media-left">
                                                <strong>Address</strong>
                                            </div>
                                            <div className="media-content">
                                                <a href="#">Room 609, Yip Fung Building 18 D’Aguilar Street, Central, Hong Kong</a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <strong>Email</strong>
                                            </div>
                                            <div className="media-content">
                                                <a href="mailto:sales@saryafinsoft.com">sales@saryafinsoft.com</a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <strong>Website</strong>
                                            </div>
                                            <div className="media-content">
                                                <a href="https://www.saryafinsoft.com" target="_blank">www.saryafinsoft.com</a>
                                            </div>
                                        </div>
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

/*
<table className="table sarya-table is-mobile">
    <tr>
        <th>
            <i className="ion ion-md-home has-gap"></i>
            <span className="has-gap">Address</span>
        </th>
        <td>
            <a href="#">Room 609, Yip Fung Building 18 D’Aguilar Street, Central, Hong Kong</a>
        </td>
    </tr>
    <tr>
        <th>
            <i className="ion ion-md-mail has-gap"></i>
            <span className="has-gap">Email</span>
        </th>
        <td>
            <a href="mailto:sales@saryafinsoft.com">sales@saryafinsoft.com</a>
        </td>
    </tr>
    <tr>
        <th>
            <i className="ion ion-md-globe has-gap"></i>
            <span className="has-gap">Website</span>
        </th>
        <td>
            <a href="https://www.saryafinsoft.com" target="_blank">www.saryafinsoft.com</a>
        </td>
    </tr>
</table>
*/