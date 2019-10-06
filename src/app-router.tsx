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
                <HomePage path="/" />
                <TechnologyPage path="/technology" />
                <ProductPage path="/product" />
                <ManualTradingPage path="/product/manual-trading" />
                <MarketConnectivityPage path="/product/market-connectivity" />
                <MarketMakingPage path="/product/market-making" />
                <StrategyTradingPage path="/product/strategy-trading" />
                <NewsPage path="/news" />
                <ContactPage path="/contact" />
                <Page404 default />
            </Router>
        )
    }
}