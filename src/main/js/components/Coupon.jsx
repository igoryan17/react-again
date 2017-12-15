import React from 'react'

const Coupon = React.createClass({
    render() {
        let locations = this.props.locations.forEach(location => locations += location + ', ');
        locations = locations.substring(0, locations.length - 3);
        return <tr key={this.props.coupon.id}>
            <td>{this.props.coupon.code}</td>
            <td>{this.props.coupon.description}</td>
            <td>{this.props.coupon.price}</td>
            {locations}
        </tr>
    }
});

export default Coupon