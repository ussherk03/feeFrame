import React, { Component } from "react";

class Fee extends Component {

  componentDidMount() {
    this.feeTitle.focus();
  }

  render() {
    const { delFee, fee } = this.props;

    return (
      <div className="fee-box">
        <div className="fee-frame" >
          {/* <span className="tag">{fee.id}</span> */}
          <div className="fee-type">
            <label className="label">
              <i>*</i> Fee type
            </label>
            <input
              ref={(feeTitle) => { this.feeTitle = feeTitle }}
              className="type-field"
              placeholder="Enter fee type..."
              size="33"
            />
          </div>

          <div className="period">
            <label className="label">
              <i>*</i> Period
            </label>
            <select className="select">
              <option>One period</option>
              <option>Two periods</option>
              <option>Three periods</option>
            </select>
          </div>

          <div className="amount">
            <label className="label">
              <i>*</i> Amount
            </label>
            <input
              className="amnt-field"
              placeholder="Enter amount"
              size="33"
              defaultValue="0"
            />
          </div>

          <a href="#!" onClick={() => delFee(fee.id)} className="close-bttn">
            <i className="fa fa-times"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Fee;
