import React from "react";

export default function OrderCard(props) {
  const minusDisabled = props.quantity === 0;

  return (
    <div className="order">
      <div>
        <h4>{props.product}</h4>
        <small>$ {props.price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          style={{ backgroundColor: minusDisabled ? "#bfbfbf" : "" }}
          onClick={() => {
            if (minusDisabled) return;
            props.onDecrease();
          }}
        >
          -
        </div>
        ​​​​
        <h4>{props.quantity}</h4>
        <div className="order-button" onClick={props.onIncrease}>
          +
        </div>
      </div>
    </div>
  );
}
