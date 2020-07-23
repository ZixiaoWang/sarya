import { h, Component, Fragment } from 'preact';

class FooterSitemap extends Component {
    render() {
        return (
            <section className="section sarya-sitemap">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3">
                            hello
                </div>
                        <div className="column is-3">
                            hello
                </div>
                        <div className="column is-3">
                            hello
                </div>
                        <div className="column is-3">
                            hello
                </div>
                    </div>
                </div>
            </section>
        )
    }
}
export class FooterComponent extends Component {
    render() {
        return (
            <Fragment>
                <footer className="sarya-footer">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-12">
                                <div className="has-text-centered is-size-7">
                                    <small>Copyright @ 2019 Sarya Finsoft Co.,Ltd.</small><br />
                                    <small>All Rights Reserved.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}