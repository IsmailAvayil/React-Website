import React from "react";

class LeftSideBar extends React.Component{
  render(){
    return(
      <div className="ui secondary vertical menu">
        <a className="active item" onClick={()=>this.props.setClassToShowFn1('bookings')}>
          <i className="calendar alternate icon"></i>
          <b>Bookings</b>
        </a>
        <a className="item" onClick={()=>this.props.setClassToShowFn1('customers')}>
        <i className="users icon"></i>
          <b>Customer Management</b>
        </a>
        <div className="ui dropdown item">
          <i className="user icon "></i>
          <i className="dropdown icon"></i>
          <b>Admin User</b>
          <div className="menu">
            <div className="header">Text Size</div>
            <a className="item">Small</a>
            <a className="item">Medium</a>
            <a className="item">Large</a>
          </div>
        </div>
      </div>                         
    )
  }
}

export default LeftSideBar;



  
