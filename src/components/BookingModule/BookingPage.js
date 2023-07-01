import React from "react";
import BookingForm from "./BookingForm";
import BookingTable from "./BookingTable";
import BookingCount from "./BookingCount";
import BookingViewDetails from "./BookingViewDetails";


class BookingPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bookedData : [],
      addNew:'bookingCount'
    }

    fetch("./BOOKING_DATABASE.json") 
    .then((response) =>{
      return response.json();
    })
    .then((datas)=>{
      this.setState({
        bookedData:datas
      }) 
      console.log(this.state.bookedData)
    })
    .catch((err)=>{
      console.log("err")
    });

  }


  
  addNewBooking=className=>{
    this.setState({
      addNew:className

    })
  }

  cancelBookingForm=cancel=>{
    this.setState({addNew:cancel})
  }

  viewDetails=viewDet=>{
    this.setState({addNew:viewDet})
  }


  submitForm=(userName,userEmail,userPhone,rate,radioValue,lockerTerm,cabinetValue)=>{
    console.log(radioValue)
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let fullDate = `${day}-${month}-${year}`;
    let uniqueId=Math.floor(Math.random() * 100)
    if(userName && userEmail && userPhone && rate && radioValue && lockerTerm && cabinetValue){
      var addData={"ID_NUMBER":uniqueId,"BOOKING_DATE":fullDate,"CUSTOMER_NAME":userName, "STATUS" :"Booking fetched","CABINET":cabinetValue,"RATE_PER_HOUR":rate,"TYPE":radioValue,"LOCKER":lockerTerm}
      var bookedData=this.state.bookedData;
      bookedData.push(addData)
      alert("Succesfully Added!")
      this.setState({bookedData:bookedData});
    }else{
      return false;
    }
    // console.log(bookedData)
  }

  
  
  
  render=()=>{
    return (
      <div style={{display:'flex'}}>
        <div>
          <BookingTable bookedData={this.state.bookedData} viewDetailsFn={this.viewDetails}/>
        </div>        
        <div className="count-section">
            {(this.state.addNew==='bookingCount')? <BookingCount bookedData={this.state.bookedData} addNewBookingFn={this. addNewBooking}/>: (this.state.addNew=="cancel")?<BookingCount bookedData={this.state.bookedData} addNewBookingFn={this. addNewBooking}/>:
            (this.state.addNew=="viewDet")?<BookingViewDetails bookedData={this.state.bookedData}/>
            :<BookingForm submitFormFn={this.submitForm} cancelBookingFormFn={this.cancelBookingForm}/>}
        </div>  
      </div>
        
    )
  }
}

export default BookingPage;