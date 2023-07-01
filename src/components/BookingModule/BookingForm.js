import React from "react";
import '../css/style.css';


class BookingForm extends React.Component{

  constructor(props){
    super(props)
    this.state={
      userName:'',
      userEmail:'',
      userPhone:'',
      rate:'',
      userNameError:'',
      userEmailError:'',
      userPhoneError:'',
      rateError:'',
      cabinetValue:'',
      lockerDatas:[],
      lockerTerm:"",
      radioValue:""
    }
  }
  
  handleBookingChange=(event)=>{
    this.setState({
      userName:event.target.value
    })
  }

  handleChangeEmail=(event)=>{
    this.setState({
      userEmail:event.target.value
    })
    
  }

  handleChangePhone=(event)=>{
    this.setState({
      userPhone:event.target.value
    })

  }

  handleChangeRate=(event)=>{
    this.setState({
      rate:event.target.value
    })

  }

  
  validateBookingName=()=>{
    var letters = /^[A-Za-z]+$/;
    if(this.state.userName.match(letters) && ((this.state.userName.length)>3))
      {
        this.setState({userNameError:""})
        return true;
      }
    else
      {
        this.setState({userNameError:"Name must be more than 3 letters",userName:""});
        return false;
      }
  };
  


  validateBookingEmail= ()=>{
    var mailCharacters=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailCharacters.test(this.state.userEmail)){     
      this.setState({userEmailError:""})
      return (true)
    }
    else{
      this.setState({userEmailError:"invalid Email",userEmail:""})
      return (false)
    }
  }


  validateBookingPhone=(event)=>{
    event.preventDefault();
    const regexPhoneNumber  = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; 
    if (this.state.userPhone.match(regexPhoneNumber )) {
      this.setState({userPhoneError:""})
      return true;
    } else {
      this.setState({userPhoneError:"Invaid Phone"})
      return false; 
    }
  }

  validateBookingRate=(event)=>{
    event.preventDefault();
    const regexPageRate = /^\d{1,6}(?:\.\d{0,2})?$/; 
    if (this.state.rate.match(regexPageRate)) {
      this.setState({rateError:""})
      return true;
    } else {
      this.setState({rateError:"Max six digits, a dot, max two digits after dot",rate:""})
      return false; 
    }
  }


  componentDidMount=()=>{
    fetch("./Locker_Database.json") 
      .then((response) =>{
        return response.json();
      })
      .then((datas)=>{
        this.setState({
          lockerDatas:datas
        })
      })
      .catch((err)=>{
        console.log("err")
      });



  }
  



  handleCabinetValue=(event)=>{
    this.setState({cabinetValue:event.target.value})
 }

  radioButtonClicked=(event)=>{
    this.setState({radioValue:event.target.value})
  }



  cancelBookingForm=(event)=>{
    event.preventDefault();
    this.props.cancelBookingFormFn('cancel')
  }

  submitBookingForm=(event)=>{
    event.preventDefault();
    this.props.submitFormFn(this.state.userName,this.state.userPhone,this.state.userEmail,this.state.rate,this.state.radioValue,this.state.lockerTerm,this.state.cabinetValue);


    // // let today = new Date()
    // // console.log(today)
    // let date = new Date()
    // let day = date.getDate();
    // let month = date.getMonth()+1;
    // let year = date.getFullYear();
    // let fullDate = `${day}-${month}-${year}.`;
    // console.log(fullDate);

    // let uniqueId=Math.floor(Math.random() * 100)
    // console.log(uniqueId)
  
    // var addData={"ID_NUMBER":uniqueId,"BOOKING_DATE":fullDate,"CUSTOMER_NAME":this.state.userName, "STATUS" :"Booking fetched","CABINET":"cabinet_1","RATE_PER_HOUR":this.state.rate}
    // var bookedData=this.state.bookedData;
    // bookedData.push(addData)
    // this.setState({bookedData:bookedData});
    // console.log(bookedData)
  

  }
  
  render(){
    return(
      <div id="bookingForm" >
        <form className="ui tiny form" id="booking-form" >
          <h4 >ADD BOOKING</h4>
          <div className="two fields">
            <div className="field">
            <label>NAME</label>
              <input type="text" name="userName"  placeholder="Name" value={this.state.userName} onChange={this.handleBookingChange}  onBlur={this.validateBookingName}/>
                <span id="name-span">{this.state.userNameError}</span>
            </div>
            <div className="field">
              <label>EMAIL</label>
              <input type="text"  name="userEmail" placeholder="Email" value={this.state.userEmail}onChange={this.handleChangeEmail}  onBlur={this.validateBookingEmail}/>
                <span id="email-span">{this.state.userEmailError}</span>
            </div>
          </div>           
          <div className="field">
            <label>PHONE</label>
            <div className="field">
              <div className="eight wide field">
                <input type="text" name="userPhone" placeholder="Phone"  value={this.state.userPhone} onChange={this.handleChangePhone} onBlur={this.validateBookingPhone}/>
                <span id="phone-span">{this.state.userPhoneError}</span>
              </div>
              <div className="four wide field">
                
              </div>
            </div>
          </div>
          <div className="two fields"> 
            <div className="field">
              <label>CABINET</label>
              <select className="ui fluid  dropdown" name="cabinetTerm" onChange={this.handleCabinetValue}  >
                <option value="">Select Cabinet</option>
                <option value="A">A</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="field">
              <label>LOCKER</label>
                {this.state.lockerDatas.map((locker_data)=>{
                  if(locker_data.locker_id==this.state.cabinetValue){
                    return(
                      <select className="ui fluid dropdown" onClick={(e)=>{this.setState({lockerTerm:e.target.value})}} >
                        <option value="">Select Locker</option>
                        <option value={locker_data.locker_1}>{locker_data.locker_1}</option>
                        <option value={locker_data.locker_2}>{locker_data.locker_2}</option>
                        <option value={locker_data.locker_3}>{locker_data.locker_3}</option>
                      </select>
                    )
                  }
                })}
            </div>                 
          </div>
            <div className="field">
              <div className="two fields">
                <div className="field">
                  <label>RATE PER HOURS</label>
                  <input type="text" name="rate" placeholder="Rate Per Hours" value={this.state.rate} onChange={this.handleChangeRate} onBlur={this.validateBookingRate}/>
                  <span id="email-span">{this.state.rateError}</span>
                </div>
                <div className="field">
                  <label>DESCRIPTION</label>
                  <textarea rows="2"></textarea>
                </div>
              </div>
            </div>
            <div className="grouped fields">
              <label >BOOKING TYPE</label>
              <div className="field">
                <div className="ui radio ">
                  <input type="radio" name="type" id="full" value="full" onClick={this.radioButtonClicked}/>
                  <label htmlFor="type">Full</label>
                </div>
                </div>  
              <div className="field">
                <div className="ui radio ">
                  <input type="radio" name="type" id="return" value="onlyReturn"onClick={this.radioButtonClicked} />
                  <label htmlFor="type">Only Return</label>
                </div>
              </div>  
            </div>                  
            <button type="submit" className="ui violet button" onClick={this.submitBookingForm}>
              Save Booking
            </button>
            <button className="ui button" onClick={this.cancelBookingForm}>
              Cancel
            </button>
        </form>
      </div>


    )
  }
}

export default BookingForm;


