import React from "react";
import CustomerTable from './CustomerTable';
import CustomerCount from './CustomerCount';
import CustomerForm from './CustomerForm';




class CustomerPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      customerData : [],
      addNewCus:'customerCount'
    }

    fetch("./CUSTOMER_DATABASE.json") 
    .then((response) =>{
      return response.json();
    })
    .then((datas)=>{
      console.log(datas);
      this.setState({
        customerData:datas
      }) 
    })
    .catch((err)=>{
      console.log("err")
    });
  
  }

  
  addNewCusMngmnt=(className)=>{
    this.setState({
      addNewCus:className
    })
  }

  cancelCustomerForm=cancel=>{
    this.setState({addNewCus:cancel})
  }

  submitForm=(customerName,customerPhone,customerEmail,)=>{
    let count=1;
    this.state.customerData.forEach((customer_data)=>{
      if (customer_data.Email==customerName){
          count+=1;
      }

    })

    if(customerName && customerEmail && customerPhone ){
      var addData={"NAME":customerName,"EMAIL":customerEmail,"PHONE":customerPhone,"BOOKING":count}
      var customerData=this.state.customerData;
      customerData.push(addData)
      alert("Succesfully Added!")
      this.setState({customerData:customerData});
    }else{
      return false;
    }
    
  }

  render=()=>{
    return(
        <div style={{display:'flex'}}>
          <div >
            <CustomerTable customerData={this.state.customerData} />
          </div>
          <div className="count-section">
              {(this.state.addNewCus==='customerCount')?<CustomerCount customerData={this.state.customerData} addNewCusMngmntFn={this. addNewCusMngmnt}/>:
              
              (this.state.addNewCus=="cancel")?<CustomerCount customerData={this.state.customerData} addNewCusMngmntFn={this. addNewCusMngmnt}/>:
              <CustomerForm submitFormFn={this.submitForm} cancelCustomerFormFn={this.cancelCustomerForm}/>}
          </div>       
        </div>
    )
  }
}

export default CustomerPage;





