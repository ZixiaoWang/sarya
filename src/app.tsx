import { h, Component, Fragment } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';

import { NavbarComponent, FooterComponent } from './components';
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

import './styles/main.scss';

export class App extends Component {

    public state: any = {
        url: '/'
    }

    onRouterChange = (e: any) => {
        this.setState({
            url: e.url
        })
    }
    
    render (props: any) {
        const history = createHashHistory();
        return (
            <Fragment>
                <NavbarComponent url={ this.state.url }/>
                <Router history={history} onChange={ this.onRouterChange }>
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
                <FooterComponent />
            </Fragment>
        ) 
    }
}