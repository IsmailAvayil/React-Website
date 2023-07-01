import React from "react";
import BookingPage from "./BookingModule/BookingPage";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import CustomerPage from "./CustomerModule/CustomerPage";





class Main extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      classToShow : 'bookings'
    }
  } 

  setClassToShowFn=(className)=>{
    this.setState({
      classToShow : className,
    });
  }


  render=()=>{
    return(
      <div>
        <div>
          < Header/>
        </div> 
        <div  id="main-body">
          <div className="sidebar-section" >
            <LeftSideBar setClassToShowFn1={this.setClassToShowFn}/>
          </div>
          <div className="contents-section" >  
            {(this.state.classToShow==='bookings')? <BookingPage/>:<CustomerPage/>}
          </div>
        </div>
      </div>
    );
  }
} 
export default Main;  



