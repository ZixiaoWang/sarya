import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { 
    HomePage, 
    TechnologyPage,
    ProductPage,
    NewsPage,
    ContactPage,
    Page404
} from './pages';

export class AppRouter extends Component {
    render() {
        return (
            <Router>
                <HomePage path="/" />
                <TechnologyPage path="/technology" />
                <ProductPage path="/product" />
                <NewsPage path="/news" />
                <ContactPage path="/contact" />
                <Page404 default />
            </Router>
        )
    }
}