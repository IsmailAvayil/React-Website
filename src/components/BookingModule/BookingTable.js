import React from "react";


class BookingTable extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      addNew:'bookingCount',
      
    }
  }


  addNewBooking=className=>{
    this.setState({
      addNew:className

    })
  }

  selectedAnItem=(e)=>{
    e.preventDefault();
    console.log(e.target.parentElement);
    this.props.viewDetailsFn('viewDet')
  }



  render=()=>{
    return(   
      <div style={{display:'flex'}}>
          <div className="table-design"  >
            <table className="ui striped table"  >
              <thead>
                <tr>
                  <th  colSpan="6">
                    <div style={{display:'flex'}}>
                      <input type="search" style={{width:'400px',height:"33px",border:'none'}}/>
                      <div className="ui compact mini menu">
                        <i className="sort amount down icon" style={{margin:'6px'}}></i> 
                        <div className="ui simple dropdown item">
                          Sort
                          <div className="menu">
                            <div className="item">Choice 1</div>
                            <div className="item">Choice 2</div>
                            <div className="item">Choice 3</div>
                          </div>
                        </div>
                      </div>
                      <div className="ui compact mini menu">
                        <i className="filter icon" style={{margin:'6px'}}></i>
                        <div className="ui simple dropdown item">
                          Filter
                          <i className="dropdown icon"></i>
                          <div className="menu">
                            <div className="item">Choice 1</div>
                            <div className="item">Choice 2</div>
                            <div className="item">Choice 3</div>
                          </div>
                        </div>
                      </div>
                    </div>         
                  </th>            
                </tr>            
                <tr>
                  <th>ID NUMBER</th>
                  <th>BOOKING DATE</th>
                  <th>CUSTOMER NAME</th>
                  <th>LOCKER</th>
                  <th>CABINET</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bookedData.map((singleData)=>{
                  return(
                    <tr key={Math.random()} className=" select-item" onClick={this.selectedAnItem} >
                      <td >{singleData.ID_NUMBER}</td>
                      <td >{singleData.BOOKING_DATE}</td>
                      <td >{singleData.CUSTOMER_NAME}</td>            
                      <td >{singleData.LOCKER}</td>
                      <td >{singleData.CABINET}</td>
                      <td>{singleData.STATUS}</td>
                  </tr>
                  )
                })}                                
              </tbody>
            </table>
      </div>
      
     

    </div>
    
    )      
    
  }
}
export default BookingTable;

