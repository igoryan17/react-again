import React from 'react'
import CouponTable from './CouponsTable'

const App = React.createClass({
    componentWillMount() {
        this.setState({
            coupons: [{
                id: 1488,
                code: "1488",
                description: "podliva",
                price: 1488
            }]
        });
    },

    render() {
        return <div>
            <CouponTable coupons={this.state.coupons}/>
        </div>
    }
});