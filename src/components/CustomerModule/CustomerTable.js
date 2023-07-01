import React from "react";
import '../css/style.css';


class CustomerTable extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      addNewCus:'customerCount'
    } 
  }

  addNewCusMngmnt=(className)=>{
    this.setState({
      addNewCus:className
    })
  }

  render=()=>{
    return(
      <div style={{display:'flex'}}>
        <div  className="table-design" id="table-desig">
          <table className="ui striped table" style={{width:'530px'}}  >
          <thead>
            <tr>
              <th colSpan="6">
                <div style={{display:'flex'}}>
                  <input type="search" style={{width:'430px',height:"33px",border:'none'}}/>
                    <div class="ui compact mini menu">
                      <i class="sort amount down icon" style={{margin:'6px'}}></i> 
                      <div class="ui simple dropdown item">
                        Sort
                        <div class="menu">
                          <i class="dropdown icon"></i>
                          <div class="item">Choice 1</div>
                          <div class="item">Choice 2</div>
                          <div class="item">Choice 3</div>
                        </div>
                      </div>
                    </div>
                    <div class="ui compact mini menu">
                      <i class="filter icon" style={{margin:'6px'}}></i>
                        <div class="ui simple dropdown item">
                          Filter
                          <i class="dropdown icon"></i>
                          <div class="menu">
                            <div class="item">Choice 1</div>
                            <div class="item">Choice 2</div>
                            <div class="item">Choice 3</div>
                          </div>
                        </div>
                    </div>
                  </div>               
                </th>
            </tr> 
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>BOOKING</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customerData.map((singleCustomerData)=>{
              return(
                <tr key={Math.random()}>
                  <td>{singleCustomerData.NAME}</td>
                  <td >{singleCustomerData.EMAIL}</td>
                  <td >{singleCustomerData.PHONE}</td>
                  <td >{singleCustomerData.BOOKING}</td>
                </tr>
              )
            }
            )
            } 
          </tbody>
        </table>
        </div>

    </div>
    )
  }
}

export default CustomerTable;



          