import React from "react";
import "../css/style.css" ;

class CustomersCount extends React.Component{

 
  
  render(){
    return(
      <React.Fragment>
        <div id="booking-count" >
          <div >
            <p style={{color:'gray'}}>Not Selected</p>
          </div>
          <div id="circle-div">
            <p>{this.props.customerData.length}</p>
            <p>total customer</p>
          </div> 
          <div style={{marginTop:'10px'}}  >
            <button  className="ui violet small button" onClick={()=>{
              this.props.addNewCusMngmntFn('customerForm')
            }}>
              ADD NEW CUSTOMER
            </button >
          </div>
        </div>  
      </React.Fragment>
    )
  }
}

export default CustomersCount;