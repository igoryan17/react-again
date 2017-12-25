import React from 'react'
import Coupon from "./Coupon.jsx";

class CouponTable extends React.Component {
   render() {
       console.log(`coupons is ${this.props.coupons}`);
       return (
           <div>
           {this.props.coupons.map(coupon => <Coupon key={coupon.id} coupon={coupon}/>)}
           </div>
       );
   }
}

export default CouponTable;