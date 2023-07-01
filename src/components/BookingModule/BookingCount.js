import React from "react";
import "../css/style.css" ;

class BookingsCount extends React.Component{

  constructor(props){
    super(props)
    this.state={
      addNew:'bookingForm'
    }
    
  }
  render(){
    return(
        <div id="booking-count" >
          <div >
            <p style={{color:'gray'}}>Not Selected</p>
          </div>
          <div id="circle-div">
            <p>{this.props.bookedData.length}</p>
            <p>total bookings</p>
          </div> 
          <div style={{marginTop:'10px'}}>
            <button  className="ui violet small button" onClick={()=>{
              this.props.addNewBookingFn('bookingForm')
            }}>
              ADD NEW BOOKING
            </button >
          </div>
        </div>     
    )
  }
}

export default BookingsCount;




