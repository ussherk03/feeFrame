import React, { Component } from  'react';
import Fee from './fee';


class Fees extends Component {

  messagesEndRef = React.createRef();

  scrollToBottom = () => {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
    
    render() { 

        const { fees, delFee, addFee, sumFees } = this.props;


        return (
          <>
            <div className="fees-frame">
              <div className="frame-banner">
                <h1 className="hero-text"> Parent / Guardian Detail </h1>

                <div className="frame-alts">
                  <span>
                    <input type="radio" />
                    <label>Disallow Login?</label>
                  </span>
                  <span>
                    <input type="radio" />
                    <label className="dodger">Existing User?</label>
                  </span>
                  <span>
                    <input type="radio" />
                    <label className="red">New User</label>
                  </span>
                </div>

                <hr></hr>
              </div>
              <div id="hero-subtext">
                <h1> Student Fee Structure </h1>
              </div>

              <div className="fees-list">
                {fees.map((fee, index) => (
                  <>
                    <Fee key={fee.id} index={index} fee={fee} delFee={delFee} />
                    <div style={{background: 'red'}}ref={ el => { this.el = el }}></div>
                  </>
                ))}
              </div>

              <div className="action-box">
                <a href="#!" className="add-fee-bttn" onClick={() => addFee()} >
                  <i className="fa fa-plus"></i> Add Fee
                </a>
              

                <a href="#!" className="sum-fee-bttn" onClick={() => sumFees()}>
                  <i className="fa fa-coins"></i> Sum Fees
                </a>

                <span className="sum">
                  Total: <span className="bigSum">0</span>
                </span>
              </div>
            </div>
          </>
        );
    }
}
 
export default Fees;