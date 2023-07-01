import React from "react";


class CustomerForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      customerName:'',
      customerEmail:'',
      customerPhone:'',
      customerNameError:'',
      customerEmailError:'',
      customerPhoneError:'',
    
  
    

    }

  
  }

  handleChangeName=(event)=>{
    console.log(event.target.value)
    this.setState({
      customerName:event.target.value
    })
    console.log(this.state.userName)
  }

  handleChangeEmail=(event)=>{
    console.log(event.target.value)
    this.setState({
      customerEmail:event.target.value
    })
    console.log(this.state.customerEmail)
  }

  handleChangePhone=(event)=>{
    console.log(event.target.value)
    this.setState({
      customerPhone:event.target.value
    })
    console.log(this.state.customerPhone)
  }



  validateCustomerName=()=>{
    var letters = /^[A-Za-z]+$/;
    if(this.state.customerName.match(letters) && ((this.state.customerName.length)>3))
      {
        this.setState({customerNameError:""})
        return true;
      }
    else
      {
        this.setState({customerNameError:"Name must be more than 3 letters",customerName:''});
        return false;
      }
  };
  


  validateCustomerEmail= ()=>{
    var mailCharacters=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailCharacters.test(this.state.customerEmail)){     
      this.setState({customerEmailError:""})
      return (true)
    }
    else{
      this.setState({customerEmailError:"invalid Email",customerEmail:''})
      return (false)
    }
  }


  validateCustomerPhone=(event)=>{
    event.preventDefault();
    const regexPhoneNumber  = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; 
    if (this.state.customerPhone.match(regexPhoneNumber )) {
      this.setState({customerPhoneError:""})
      return true;
    } else {
      this.setState({customerPhoneError:"Invaid Phone",customerPhone:''})
      return false; 
    }
  }


  cancelCustomerForm=(event)=>{
    event.preventDefault();
    this.props.cancelCustomerFormFn('cancel')
  }

  submitCustomerForm=(event)=>{
    event.preventDefault();
    this.props.submitFormFn(this.state.customerName,this.state.customerPhone,this.state.customerEmail);

  }
  

  render(){
    return(
      
      <div id="bookingForm" >
      <form className="ui tiny form" id="booking-form" >
        <h4 >ADD CUSTOMER</h4>
        <div className="two fields">
          <div className="field">
          <label>NAME</label>
            <input type="text" name="customerName"  placeholder="Name" value={this.state.userName} onChange={this.handleChangeName}  onBlur={this.validateCustomerName}/>
              <span id="name-span">{this.state.customerNameError}</span>
          </div>
          <div className="field">
            <label>EMAIL</label>
            <input type="text"  name="customerEmail" placeholder="Email" value={this.state.customerEmail}onChange={this.handleChangeEmail}  onBlur={this.validateCustomerEmail} />
              <span id="email-span">{this.state.customerEmailError}</span>
          </div>
        </div>  
        <div className="two fields">
          <div className="field">
            <label>PHONE</label>
            <input type="text" name="customerPhone" placeholder="Phone" value={this.state.customerPhone} onChange={this.handleChangePhone} onBlur={this.validateCustomerPhone}/>
                <span id="phone-span">{this.state.customerPhoneError}</span>
          </div>
          <div className="field">
            <label>BOOKING</label>
            <input type="text"  name="userBookig" placeholder="Booking" disabled />
              
          </div>
        </div>
        <button type="submit" class="ui violet button" onClick={this.submitCustomerForm}>
          Save Booking
        </button>
        <button class="ui button" onClick={this.cancelCustomerForm}>
          Cancel
        </button>
      </form>
    </div>

    )
  }
}

export default CustomerForm;



