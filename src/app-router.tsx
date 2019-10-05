import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { 
    HomePage, 
    AboutPage,
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
                <AboutPage path="/about" />
                <TechnologyPage path="/technology" />
                <ProductPage path="/product" />
                <NewsPage path="/news" />
                <ContactPage path="/contact" />
                <Page404 default />
            </Router>
        )
    }
}