import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

const Display = ({ calculatedTip, total, people, handleResetBtn,handleRadioChange }) => {

  const returnCurrencyAmt = (amt) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(amt);
  }

  return (
    <div className="display">
      <div className="display-group">
        <div className="display-row">
            <div className="display-label">
              <p className="header">Tip Amount</p>
              <p className="unit">/ person</p>
            </div>
              <p className="display-amt">{returnCurrencyAmt(`${calculatedTip ? calculatedTip/people : "0"}`)}</p>
          </div>
          <div className="display-row">
            <div className="display-label">
              <p className="header">Total</p>
              <p className="unit">/ person</p>
            </div>
              <p className="display-amt">{returnCurrencyAmt(`${total ? total/people : "0"}`)}</p>
          </div>
      </div>
      {
        total ? (<button className="btn" onClick={() => {handleResetBtn();handleRadioChange();}}>Reset</button>) : (<button className="btn" disabled>Reset</button>)
      }
    </div>
  );
};

export default Display;
