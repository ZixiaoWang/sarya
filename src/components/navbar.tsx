import { h, Component, Fragment } from 'preact';
import { Link } from 'preact-router';

class ActiveLink extends Component<any, any> {
    render() {
        let className = this.props.className || '';
        let classNames = className.split(' ');

        if (this.props.active && classNames.includes('is-active') === false) {
            classNames.push('is-active');
            className = classNames.join(' ');
        } else if (!this.props.active && classNames.includes('is-active') === true) {
            className = className.replace(/is-active/g, '');
            className = className.replace(/\s{2,}/g, ' ');
        }

        return (
            <Link {...this.props} className={className}>{this.props.children}</Link>
        )
    }
}

class NavbarItems extends Component<any, any> {
    render(props: any) {
        const url: string = props.url;
        return (
            <Fragment>
                <ActiveLink active={url === '/'} className="navbar-item" href="/">
                    <i className="ion ion-md-home has-gap"></i>
                    <span className="has-gap">Home</span>
                </ActiveLink>
                <ActiveLink active={url === '/technology'} className="navbar-item" href="/technology">
                    <i className="ion ion-md-flask has-gap"></i>
                    <span className="has-gap">Technology</span>
                </ActiveLink>
                <div className="navbar-item has-dropdown is-hoverable">
                    <ActiveLink active={url.indexOf('/product') === 0} className="navbar-link" href="/product">
                        <i className="ion ion-md-trending-up has-gap"></i>
                        <span className="has-gap">Products</span>
                    </ActiveLink>
                    <div class="navbar-dropdown sarya-navbar-dropdown has-borderless">
                        <ActiveLink active={url === '/product/market-connectivity'} className="navbar-item" href="/product/market-connectivity">Market Connectivity</ActiveLink>
                        <ActiveLink active={url === '/product/manual-trading'} className="navbar-item" href="/product/manual-trading">Manual Trading</ActiveLink>
                        <ActiveLink active={url === '/product/market-making'} className="navbar-item" href="/product/market-making">Market Making</ActiveLink>
                        <ActiveLink active={url === '/product/strategy-trading'} className="navbar-item" href="/product/strategy-trading">Strategy Trading</ActiveLink>
                    </div>
                </div>
                <ActiveLink active={url === '/news'} className="navbar-item" href="/news">
                    <i className="ion ion-md-text has-gap"></i>
                    <span className="has-gap">News</span>
                </ActiveLink>
                <ActiveLink active={url === '/contact'} className="navbar-item" href="/contact">
                    <i className="ion ion-md-call has-gap"></i>
                    <span className="has-gap">Contacts</span>
                </ActiveLink>
            </Fragment>
        )
    }
}

export class NavbarComponent extends Component<any, any> {

    public state: any = {
        url: this.props.url,
        isSubnavOpen: false
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            isSubnavOpen: false
        })
    }

    toggleSubnav = () => {
        this.setState({
            isSubnavOpen: !this.state.isSubnavOpen
        })
    }

    render() {
        let classname = `navbar-menu sarya-subnavbar`;
        let url = this.props.url;

        if (this.state.isSubnavOpen) {
            classname += ' is-open';
        }

        return (
            <Fragment>
                <nav className="navbar is-fixed-top sarya-navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <div className="navbar-item is-large">
                                <Link href="/">
                                    <img src="./assets/images/sarya_logo.png" alt="Sarya Finsoft" />
                                </Link>
                            </div>
                            <div className="navbar-item">
                                <strong className="is-bold has-sarya-color">TRADING WITH AN EDGE</strong>
                            </div>
                            <div className="navbar-burger">
                                <button className="button has-sarya-bgcolor" onClick={this.toggleSubnav}>
                                    {
                                        this.state.isSubnavOpen === false &&
                                        <i className="ion ion-md-menu has-text-white"></i>
                                    }
                                    {
                                        this.state.isSubnavOpen &&
                                        <i className="ion ion-md-close has-text-white"></i>
                                    }
                                </button>
                            </div>
                        </div>
                        <div className={classname}>
                            <div className="navbar-end">
                                <NavbarItems url={url} />
                            </div>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

{/* 
    <nav className={subnavClassName}>
        <div className="container">

        </div>
    </nav> 
*/}