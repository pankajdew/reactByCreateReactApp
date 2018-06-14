import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { Dashboard: ['Dashboard1', 'Dashboard2', 'Dashboard3'] };
    }
    redirect(dashboard) {
        alert(`${dashboard} clicked`)
    }

    render() {
        const renderDashboard = this.state.Dashboard.map(dashboard => <span key={dashboard} onClick={(e) => this.redirect(dashboard)} className="dashboard">{dashboard}</span>)
        return (
            <div>
                <h2>Home</h2>
                <h3>Dashboard</h3>
                {renderDashboard}
                {/* {this.state.Dashboard.map(dashboard => <span onClick={this.redirect.bind(this, dashboard)} className="dashboard">{dashboard}</span>)} */}
            </div>
        )
    }
}
export default Home