import { h, Component, Fragment } from 'preact';

export class FooterComponent extends Component {
    render() {
        return (
            <footer className="sarya-footer">
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <small>Copyright @ 2019 Sarya Finsoft Co.,Ltd. All Rights Reserved.</small>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}