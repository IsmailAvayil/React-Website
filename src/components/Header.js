import React from "react";
import "./css/style.css" ;
import appLogo from '../images/logo.png';



class  Header extends React.Component {
  render(){
    return(
      <div  className="header">
        <div className="logo">
            <img src={appLogo} alt="Logo"/> 
        </div>
        <div>
          <ul>
            <li key="lang"><a href="#">Change language to</a></li>
            <li key="eng"><b><a href="#">English</a></b></li>
            <li key="dut"><a href="#">Dutch</a></li>
            <li key="cir"><i className="circle large icon disabled"></i></li>
            <li key="admn" ><a href="#" style={{marginRight:"10px"}}>Hi,<b>Admin</b></a></li>
          </ul> 
        </div>
      </div>
    )
  };
};

export default Header;



