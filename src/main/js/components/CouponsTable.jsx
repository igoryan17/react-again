import React from 'react'
import Coupon from "./Coupon";

const CouponTable = React.createClass({
   render() {
       const coupons = this.props.coupons.map(coupon => <Coupon coupon={coupon}></Coupon>);
       return <table>
           <tbody>
           <tr>Id</tr>
           <tr>Code</tr>
           <tr>Description</tr>
           <tr>Price</tr>
           </tbody>
       </table>
   }
});