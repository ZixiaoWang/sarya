import { h, Component, Fragment } from 'preact';

export class TechnologyPage extends Component {
    render() {
        const backgroundImage: string = 'url(./assets/banner/banner-2.jpg)';

        return (
            <Fragment>
                <section className="hero is-medium sarya-banner" style={`background-image: ${backgroundImage}`}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-12">
                                    <h3 className="title sarya-banner-title is-3">Technology</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-9">
                                <div className="sarya-card">
                                    <div className="content">
                                        <h3 className="title has-text-black is-3">DPDK</h3>
                                        <p>
                                            The network latency control is one of the pillars
                                            for any HFT solutions. SARYA applies Intel proposed
                                            DPDK development kit to bypass Linux Kernel in order
                                            to improve our network latency.
                                        </p>
                                        <figure className="image">
                                            <img src="./assets/webpage/technology/DPDK.png" alt="DPDK" />
                                        </figure>
                                        <ul className="is-size-6">
                                            <li>NIC driver runs in App’s user mode to avoid context switch and packet copy</li>
                                            <li>DPDK uses Linux huge page for better memory alignment and less TLB cache miss to speed upmemory access</li>
                                            <li>DPDK uses ring data structure to avoid locks</li>
                                            <li>DPDK fast memory access using CPU local cache (L1, L2, L3) with NUMA processor architecture in mind.</li>
                                            <li>Thread-Binding to CPU core to avoid cached data and code copy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-9">
                                <div className="sarya-card">
                                    <div className="content">
                                        <h3 className="title has-text-black is-3">LMAX Disruptor Pattern</h3>
                                        <p>
                                            SARYA applies LMAX Disruptor pattern in order to improve
                                            multi-threading application throughout by reducing
                                            thread context switching and less thread locking.
                                        </p>
                                        <figure className="image">
                                            <img src="./assets/webpage/technology/LMAX_DISRUPTOR.png" alt="LAMX Disruptor Pattern" />
                                        </figure>
                                        <ul className="is-size-6 pull-right">
                                            <li>NIC driver runs in App’s user mode to avoid context switch and packet copy</li>
                                            <li>DPDK uses Linux huge page for better memory alignment and less TLB cache miss to speed upmemory access</li>
                                            <li>DPDK uses ring data structure to avoid locks</li>
                                            <li>DPDK fast memory access using CPU local cache (L1, L2, L3) with NUMA processor architecture in mind.</li>
                                            <li>Thread-Binding to CPU core to avoid cached data and code copy</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}