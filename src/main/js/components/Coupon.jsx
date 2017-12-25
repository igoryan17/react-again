import React from 'react'

class Coupon extends React.Component {
    render() {
        return <tr key={this.props.id}>
            <td>{this.props.code}</td>
            <td>{this.props.description}</td>
            <td>{this.props.price}</td>
        </tr>
    }
}

export default Coupon;