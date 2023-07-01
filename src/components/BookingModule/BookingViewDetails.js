import React from 'react';


class BookingViewDetails extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      
      <div className="ui  card" style={{marginTop:'10px'}}>
        <div className="content">
          <h4>BOOKING DETAILS</h4>
        </div>
        <div className="content" >
            <div className="two fields" style={{display:"flex",justifyContent:'space-between'}}>
              <div className="field">
                <label><h5>ID NUMBER</h5></label>
                <p></p>
              </div>
              <div className="field">
                <label><h5>CABINET</h5></label>
                <p></p>
              </div>  
           </div>
            <div className="two fields" style={{display:"flex",justifyContent:'space-between'}}>
              <div className="field">
                <label><h5>BOOKING DATE</h5></label>
                <p>5555</p>
              </div>
              <div className="field">
                <label><h5>LOCKER</h5></label>
                <p>5555</p>
              </div>  
           </div>
            <div className="two fields" style={{display:"flex",justifyContent:'space-between'}}>
              <div className="field">
                <label><h5>CUSTOMER NAME</h5></label>
                <p>5555</p>
              </div>
              <div className="field">
                <label><h5>STATUS</h5></label>
                <p>5555</p>
              </div>  
           </div>
        </div>
        <div className="extra content">
          <button className="ui mini button">CANCEL</button>
          <button className="ui mini red button">DELETE BOOKING</button>
          <button className="ui mini violet button">EDIT BOOKING</button>
        </div>
      </div>
    
    )
  }
}

export default BookingViewDetails;