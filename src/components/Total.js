import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const carPrice = useSelector(state => state.car.price)
  const additionalPrice = useSelector(state => state.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${carPrice + additionalPrice}</h4>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//   carPrice: state.car.price,
//   additionalPrice: state.additionalPrice
//   }
// }

// export default connect(mapStateToProps, {}) (Total);
export default Total;