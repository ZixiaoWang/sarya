import { h, Component, Fragment } from 'preact';

export class FooterComponent extends Component {
    render() {
        return (
            <footer className="sarya-footer">
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <div className="has-text-centered is-size-7">
                                <small>Copyright @ 2019 Sarya Finsoft Co.,Ltd.</small><br/>
                                <small>All Rights Reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}