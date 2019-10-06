import { h, Component, Fragment } from 'preact';

export class ContactPage extends Component {
    render() {
        const backgroundImage: string = 'url(http://placehold.it/900x500)';

        return (
            <Fragment>
                <section className="hero is-medium sarya-banner" style={`background-image: ${backgroundImage}`}>
                    <div className="hero-body"></div>
                </section>
                <section className="section" id="contact">
                    <div className="container">
                        <div className="columns">
                            <div class="column is-12">
                                <h4 class="title is-3">Contact Us</h4>
                                <table className="table">
                                    <tr>
                                        <th>
                                            <i className="ion ion-md-home has-gap"></i>
                                            <span className="has-gap">Address</span>
                                        </th>
                                        <td>
                                            <a href="#">Room 609, Yip Fung Building 18 D’Aguilar Street, Central, Hong Ko</a>
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
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
            </Fragment>
        )
    }
}