import { h, Component, Fragment } from 'preact';
import { AppRouter } from './app-router';
import { NavbarComponent, FooterComponent } from './components';

import './styles/main.scss';

export class App extends Component {
    render (props: any) {
        return (
            <Fragment>
                <NavbarComponent />
                <AppRouter />
                <FooterComponent />
            </Fragment>
        ) 
    }
}