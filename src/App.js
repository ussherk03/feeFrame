import React, { Component } from 'react';
import './App.css';
import Fees from './branches/fees';
import './fonts/css/all.min.css';


class App extends Component {
  state = { 
    fees: [ 
      {id: 1, amount: 0}, 
    ], 
  }

  

  sumFees = () => {
    const allFields = Array.from(document.querySelectorAll('.amnt-field'));
  
    let sum = allFields.map(field => Number(field.value)).reduce((passedIn, item) => passedIn + item, 0);

    document.querySelector('.bigSum').textContent = `${sum}`;

  }

  
  addFee = () => {
    let feesList = document.querySelector('.fees-list');
    
    let arrFees =  Array.from(feesList.children);
    let i = arrFees.length - 1;
    

    let newfees = [...(this.state.fees)];

    
    console.log(newfees);
    
    if (newfees.length <= 9) {

      newfees.push( { id: this.state.fees.length + 1, amount: 0 } );

    }
  
    this.setState({ fees: newfees });

  }


  delFee = (feesID) => {
    let stateFees = this.state.fees;

    const feesList = document.querySelector('.fees-list');

    if (stateFees.length !== 1) {
      
      let fees = stateFees.filter(c => c.id !== feesID);
      console.log(fees);
  
      
      this.setState({ fees: fees });

    }
      
  } 

    
  render() { 
    return ( 
      <>
        <Fees fees={this.state.fees} delFee={this.delFee} sumFees={this.sumFees} addFee={this.addFee} />
      </>
    )
  }
}
 
export default App;