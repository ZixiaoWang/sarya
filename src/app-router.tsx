import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { 
    HomePage, 
    TechnologyPage,
    ProductPage,
    NewsPage,
    ContactPage,
    Page404,

    ManualTradingPage,
    MarketConnectivityPage,
    MarketMakingPage,
    StrategyTradingPage
} from './pages';

export class AppRouter extends Component {
    render() {
        return (
            <Router>
                <HomePage path="/sarya" />
                <TechnologyPage path="/sarya/technology" />
                <ProductPage path="/sarya/product" />
                <ManualTradingPage path="/sarya/product/manual-trading" />
                <MarketConnectivityPage path="/sarya/product/market-connectivity" />
                <MarketMakingPage path="/sarya/product/market-making" />
                <StrategyTradingPage path="/sarya/product/strategy-trading" />
                <NewsPage path="/sarya/news" />
                <ContactPage path="/sarya/contact" />
                <Page404 default />
            </Router>
        )
    }
}