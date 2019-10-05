import { h, Component, Fragment } from 'preact';
import { AppRouter } from './app-router';
import { NavbarComponent } from './components';

import './styles/main.scss';

export class App extends Component {
    render (props: any) {
        return (
            <Fragment>
                <NavbarComponent />
                <AppRouter />
                <footer className="hero is-small">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    copyright @2019
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        ) 
    }
}