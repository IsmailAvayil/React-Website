(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),s=a(1),o=a(3),i=a(2),m=a(4),u=a(5),d=(a(6),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleBookingChange=function(e){a.setState({userName:e.target.value})},a.handleChangeEmail=function(e){a.setState({userEmail:e.target.value})},a.handleChangePhone=function(e){a.setState({userPhone:e.target.value})},a.handleChangeRate=function(e){a.setState({rate:e.target.value})},a.validateBookingName=function(){return a.state.userName.match(/^[A-Za-z]+$/)&&a.state.userName.length>3?(a.setState({userNameError:""}),!0):(a.setState({userNameError:"Name must be more than 3 letters",userName:""}),!1)},a.validateBookingEmail=function(){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.state.userEmail)?(a.setState({userEmailError:""}),!0):(a.setState({userEmailError:"invalid Email",userEmail:""}),!1)},a.validateBookingPhone=function(e){e.preventDefault();return a.state.userPhone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)?(a.setState({userPhoneError:""}),!0):(a.setState({userPhoneError:"Invaid Phone"}),!1)},a.validateBookingRate=function(e){e.preventDefault();return a.state.rate.match(/^\d{1,6}(?:\.\d{0,2})?$/)?(a.setState({rateError:""}),!0):(a.setState({rateError:"Max six digits, a dot, max two digits after dot",rate:""}),!1)},a.componentDidMount=function(){fetch("./Locker_Database.json").then(function(e){return e.json()}).then(function(e){a.setState({lockerDatas:e})}).catch(function(e){console.log("err")})},a.handleCabinetValue=function(e){a.setState({cabinetValue:e.target.value})},a.radioButtonClicked=function(e){a.setState({radioValue:e.target.value})},a.cancelBookingForm=function(e){e.preventDefault(),a.props.cancelBookingFormFn("cancel")},a.submitBookingForm=function(e){e.preventDefault(),a.props.submitFormFn(a.state.userName,a.state.userPhone,a.state.userEmail,a.state.rate,a.state.radioValue,a.state.lockerTerm,a.state.cabinetValue)},a.state={userName:"",userEmail:"",userPhone:"",rate:"",userNameError:"",userEmailError:"",userPhoneError:"",rateError:"",cabinetValue:"",lockerDatas:[],lockerTerm:"",radioValue:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"bookingForm"},l.a.createElement("form",{className:"ui tiny form",id:"booking-form"},l.a.createElement("h4",null,"ADD BOOKING"),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"NAME"),l.a.createElement("input",{type:"text",name:"userName",placeholder:"Name",value:this.state.userName,onChange:this.handleBookingChange,onBlur:this.validateBookingName}),l.a.createElement("span",{id:"name-span"},this.state.userNameError)),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"EMAIL"),l.a.createElement("input",{type:"text",name:"userEmail",placeholder:"Email",value:this.state.userEmail,onChange:this.handleChangeEmail,onBlur:this.validateBookingEmail}),l.a.createElement("span",{id:"email-span"},this.state.userEmailError))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"PHONE"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"eight wide field"},l.a.createElement("input",{type:"text",name:"userPhone",placeholder:"Phone",value:this.state.userPhone,onChange:this.handleChangePhone,onBlur:this.validateBookingPhone}),l.a.createElement("span",{id:"phone-span"},this.state.userPhoneError)),l.a.createElement("div",{className:"four wide field"}))),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"CABINET"),l.a.createElement("select",{className:"ui fluid  dropdown",name:"cabinetTerm",onChange:this.handleCabinetValue},l.a.createElement("option",{value:""},"Select Cabinet"),l.a.createElement("option",{value:"A"},"A"),l.a.createElement("option",{value:"1"},"1"))),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"LOCKER"),this.state.lockerDatas.map(function(t){if(t.locker_id==e.state.cabinetValue)return l.a.createElement("select",{className:"ui fluid dropdown",onClick:function(t){e.setState({lockerTerm:t.target.value})}},l.a.createElement("option",{value:""},"Select Locker"),l.a.createElement("option",{value:t.locker_1},t.locker_1),l.a.createElement("option",{value:t.locker_2},t.locker_2),l.a.createElement("option",{value:t.locker_3},t.locker_3))}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"RATE PER HOURS"),l.a.createElement("input",{type:"text",name:"rate",placeholder:"Rate Per Hours",value:this.state.rate,onChange:this.handleChangeRate,onBlur:this.validateBookingRate}),l.a.createElement("span",{id:"email-span"},this.state.rateError)),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"DESCRIPTION"),l.a.createElement("textarea",{rows:"2"})))),l.a.createElement("div",{className:"grouped fields"},l.a.createElement("label",null,"BOOKING TYPE"),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio "},l.a.createElement("input",{type:"radio",name:"type",id:"full",value:"full",onClick:this.radioButtonClicked}),l.a.createElement("label",{htmlFor:"type"},"Full"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui radio "},l.a.createElement("input",{type:"radio",name:"type",id:"return",value:"onlyReturn",onClick:this.radioButtonClicked}),l.a.createElement("label",{htmlFor:"type"},"Only Return")))),l.a.createElement("button",{type:"submit",className:"ui violet button",onClick:this.submitBookingForm},"Save Booking"),l.a.createElement("button",{className:"ui button",onClick:this.cancelBookingForm},"Cancel")))}}]),t}(l.a.Component)),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).addNewBooking=function(e){a.setState({addNew:e})},a.selectedAnItem=function(e){e.preventDefault(),console.log(e.target.parentElement),a.props.viewDetailsFn("viewDet")},a.render=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"table-design"},l.a.createElement("table",{className:"ui striped table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"6"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"search",style:{width:"400px",height:"33px",border:"none"}}),l.a.createElement("div",{className:"ui compact mini menu"},l.a.createElement("i",{className:"sort amount down icon",style:{margin:"6px"}}),l.a.createElement("div",{className:"ui simple dropdown item"},"Sort",l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"item"},"Choice 1"),l.a.createElement("div",{className:"item"},"Choice 2"),l.a.createElement("div",{className:"item"},"Choice 3")))),l.a.createElement("div",{className:"ui compact mini menu"},l.a.createElement("i",{className:"filter icon",style:{margin:"6px"}}),l.a.createElement("div",{className:"ui simple dropdown item"},"Filter",l.a.createElement("i",{className:"dropdown icon"}),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"item"},"Choice 1"),l.a.createElement("div",{className:"item"},"Choice 2"),l.a.createElement("div",{className:"item"},"Choice 3"))))))),l.a.createElement("tr",null,l.a.createElement("th",null,"ID NUMBER"),l.a.createElement("th",null,"BOOKING DATE"),l.a.createElement("th",null,"CUSTOMER NAME"),l.a.createElement("th",null,"LOCKER"),l.a.createElement("th",null,"CABINET"),l.a.createElement("th",null,"STATUS"))),l.a.createElement("tbody",null,a.props.bookedData.map(function(e){return l.a.createElement("tr",{key:Math.random(),className:" select-item",onClick:a.selectedAnItem},l.a.createElement("td",null,e.ID_NUMBER),l.a.createElement("td",null,e.BOOKING_DATE),l.a.createElement("td",null,e.CUSTOMER_NAME),l.a.createElement("td",null,e.LOCKER),l.a.createElement("td",null,e.CABINET),l.a.createElement("td",null,e.STATUS))})))))},a.state={addNew:"bookingCount"},a}return Object(m.a)(t,e),t}(l.a.Component),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={addNew:"bookingForm"},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"booking-count"},l.a.createElement("div",null,l.a.createElement("p",{style:{color:"gray"}},"Not Selected")),l.a.createElement("div",{id:"circle-div"},l.a.createElement("p",null,this.props.bookedData.length),l.a.createElement("p",null,"total bookings")),l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement("button",{className:"ui violet small button",onClick:function(){e.props.addNewBookingFn("bookingForm")}},"ADD NEW BOOKING")))}}]),t}(l.a.Component),v=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ui  card",style:{marginTop:"10px"}},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"BOOKING DETAILS")),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"two fields",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,l.a.createElement("h5",null,"ID NUMBER")),l.a.createElement("p",null)),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,l.a.createElement("h5",null,"CABINET")),l.a.createElement("p",null))),l.a.createElement("div",{className:"two fields",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,l.a.createElement("h5",null,"BOOKING DATE")),l.a.createElement("p",null,"5555")),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,l.a.createElement("h5",null,"LOCKER")),l.a.createElement("p",null,"5555"))),l.a.createElement("div",{className:"two fields",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,l.a.createElement("h5",null,"CUSTOMER NAME")),l.a.createElement("p",null,"5555")),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,l.a.createElement("h5",null,"STATUS")),l.a.createElement("p",null,"5555")))),l.a.createElement("div",{className:"extra content"},l.a.createElement("button",{className:"ui mini button"},"CANCEL"),l.a.createElement("button",{className:"ui mini red button"},"DELETE BOOKING"),l.a.createElement("button",{className:"ui mini violet button"},"EDIT BOOKING")))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).addNewBooking=function(e){a.setState({addNew:e})},a.cancelBookingForm=function(e){a.setState({addNew:e})},a.viewDetails=function(e){a.setState({addNew:e})},a.submitForm=function(e,t,n,l,r,c,s){console.log(r);var o=new Date,i=o.getDate(),m=o.getMonth()+1,u=o.getFullYear(),d="".concat(i,"-").concat(m,"-").concat(u),E=Math.floor(100*Math.random());if(!(e&&t&&n&&l&&r&&c&&s))return!1;var h={ID_NUMBER:E,BOOKING_DATE:d,CUSTOMER_NAME:e,STATUS:"Booking fetched",CABINET:s,RATE_PER_HOUR:l,TYPE:r,LOCKER:c},v=a.state.bookedData;v.push(h),alert("Succesfully Added!"),a.setState({bookedData:v})},a.render=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(E,{bookedData:a.state.bookedData,viewDetailsFn:a.viewDetails})),l.a.createElement("div",{className:"count-section"},"bookingCount"===a.state.addNew?l.a.createElement(h,{bookedData:a.state.bookedData,addNewBookingFn:a.addNewBooking}):"cancel"==a.state.addNew?l.a.createElement(h,{bookedData:a.state.bookedData,addNewBookingFn:a.addNewBooking}):"viewDet"==a.state.addNew?l.a.createElement(v,{bookedData:a.state.bookedData}):l.a.createElement(d,{submitFormFn:a.submitForm,cancelBookingFormFn:a.cancelBookingForm})))},a.state={bookedData:[],addNew:"bookingCount"},fetch("./BOOKING_DATABASE.json").then(function(e){return e.json()}).then(function(e){a.setState({bookedData:e}),console.log(a.state.bookedData)}).catch(function(e){console.log("err")}),a}return Object(m.a)(t,e),t}(l.a.Component),p=a(9),f=a.n(p),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:f.a,alt:"Logo"})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{key:"lang"},l.a.createElement("a",{href:"#"},"Change language to")),l.a.createElement("li",{key:"eng"},l.a.createElement("b",null,l.a.createElement("a",{href:"#"},"English"))),l.a.createElement("li",{key:"dut"},l.a.createElement("a",{href:"#"},"Dutch")),l.a.createElement("li",{key:"cir"},l.a.createElement("i",{className:"circle large icon disabled"})),l.a.createElement("li",{key:"admn"},l.a.createElement("a",{href:"#",style:{marginRight:"10px"}},"Hi,",l.a.createElement("b",null,"Admin"))))))}}]),t}(l.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"ui secondary vertical menu"},l.a.createElement("a",{className:"active item",onClick:function(){return e.props.setClassToShowFn1("bookings")}},l.a.createElement("i",{className:"calendar alternate icon"}),l.a.createElement("b",null,"Bookings")),l.a.createElement("a",{className:"item",onClick:function(){return e.props.setClassToShowFn1("customers")}},l.a.createElement("i",{className:"users icon"}),l.a.createElement("b",null,"Customer Management")),l.a.createElement("div",{className:"ui dropdown item"},l.a.createElement("i",{className:"user icon "}),l.a.createElement("i",{className:"dropdown icon"}),l.a.createElement("b",null,"Admin User"),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"header"},"Text Size"),l.a.createElement("a",{className:"item"},"Small"),l.a.createElement("a",{className:"item"},"Medium"),l.a.createElement("a",{className:"item"},"Large"))))}}]),t}(l.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).addNewCusMngmnt=function(e){a.setState({addNewCus:e})},a.render=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"table-design",id:"table-desig"},l.a.createElement("table",{className:"ui striped table",style:{width:"530px"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"6"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"search",style:{width:"430px",height:"33px",border:"none"}}),l.a.createElement("div",{class:"ui compact mini menu"},l.a.createElement("i",{class:"sort amount down icon",style:{margin:"6px"}}),l.a.createElement("div",{class:"ui simple dropdown item"},"Sort",l.a.createElement("div",{class:"menu"},l.a.createElement("i",{class:"dropdown icon"}),l.a.createElement("div",{class:"item"},"Choice 1"),l.a.createElement("div",{class:"item"},"Choice 2"),l.a.createElement("div",{class:"item"},"Choice 3")))),l.a.createElement("div",{class:"ui compact mini menu"},l.a.createElement("i",{class:"filter icon",style:{margin:"6px"}}),l.a.createElement("div",{class:"ui simple dropdown item"},"Filter",l.a.createElement("i",{class:"dropdown icon"}),l.a.createElement("div",{class:"menu"},l.a.createElement("div",{class:"item"},"Choice 1"),l.a.createElement("div",{class:"item"},"Choice 2"),l.a.createElement("div",{class:"item"},"Choice 3"))))))),l.a.createElement("tr",null,l.a.createElement("th",null,"NAME"),l.a.createElement("th",null,"EMAIL"),l.a.createElement("th",null,"PHONE"),l.a.createElement("th",null,"BOOKING"))),l.a.createElement("tbody",null,a.props.customerData.map(function(e){return l.a.createElement("tr",{key:Math.random()},l.a.createElement("td",null,e.NAME),l.a.createElement("td",null,e.EMAIL),l.a.createElement("td",null,e.PHONE),l.a.createElement("td",null,e.BOOKING))})))))},a.state={addNewCus:"customerCount"},a}return Object(m.a)(t,e),t}(l.a.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"booking-count"},l.a.createElement("div",null,l.a.createElement("p",{style:{color:"gray"}},"Not Selected")),l.a.createElement("div",{id:"circle-div"},l.a.createElement("p",null,this.props.customerData.length),l.a.createElement("p",null,"total customer")),l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement("button",{className:"ui violet small button",onClick:function(){e.props.addNewCusMngmntFn("customerForm")}},"ADD NEW CUSTOMER"))))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleChangeName=function(e){console.log(e.target.value),a.setState({customerName:e.target.value}),console.log(a.state.userName)},a.handleChangeEmail=function(e){console.log(e.target.value),a.setState({customerEmail:e.target.value}),console.log(a.state.customerEmail)},a.handleChangePhone=function(e){console.log(e.target.value),a.setState({customerPhone:e.target.value}),console.log(a.state.customerPhone)},a.validateCustomerName=function(){return a.state.customerName.match(/^[A-Za-z]+$/)&&a.state.customerName.length>3?(a.setState({customerNameError:""}),!0):(a.setState({customerNameError:"Name must be more than 3 letters",customerName:""}),!1)},a.validateCustomerEmail=function(){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.state.customerEmail)?(a.setState({customerEmailError:""}),!0):(a.setState({customerEmailError:"invalid Email",customerEmail:""}),!1)},a.validateCustomerPhone=function(e){e.preventDefault();return a.state.customerPhone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)?(a.setState({customerPhoneError:""}),!0):(a.setState({customerPhoneError:"Invaid Phone",customerPhone:""}),!1)},a.cancelCustomerForm=function(e){e.preventDefault(),a.props.cancelCustomerFormFn("cancel")},a.submitCustomerForm=function(e){e.preventDefault(),a.props.submitFormFn(a.state.customerName,a.state.customerPhone,a.state.customerEmail)},a.state={customerName:"",customerEmail:"",customerPhone:"",customerNameError:"",customerEmailError:"",customerPhoneError:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"bookingForm"},l.a.createElement("form",{className:"ui tiny form",id:"booking-form"},l.a.createElement("h4",null,"ADD CUSTOMER"),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"NAME"),l.a.createElement("input",{type:"text",name:"customerName",placeholder:"Name",value:this.state.userName,onChange:this.handleChangeName,onBlur:this.validateCustomerName}),l.a.createElement("span",{id:"name-span"},this.state.customerNameError)),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"EMAIL"),l.a.createElement("input",{type:"text",name:"customerEmail",placeholder:"Email",value:this.state.customerEmail,onChange:this.handleChangeEmail,onBlur:this.validateCustomerEmail}),l.a.createElement("span",{id:"email-span"},this.state.customerEmailError))),l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"PHONE"),l.a.createElement("input",{type:"text",name:"customerPhone",placeholder:"Phone",value:this.state.customerPhone,onChange:this.handleChangePhone,onBlur:this.validateCustomerPhone}),l.a.createElement("span",{id:"phone-span"},this.state.customerPhoneError)),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"BOOKING"),l.a.createElement("input",{type:"text",name:"userBookig",placeholder:"Booking",disabled:!0}))),l.a.createElement("button",{type:"submit",class:"ui violet button",onClick:this.submitCustomerForm},"Save Booking"),l.a.createElement("button",{class:"ui button",onClick:this.cancelCustomerForm},"Cancel")))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).addNewCusMngmnt=function(e){a.setState({addNewCus:e})},a.cancelCustomerForm=function(e){a.setState({addNewCus:e})},a.submitForm=function(e,t,n){var l=1;if(a.state.customerData.forEach(function(t){t.Email==e&&(l+=1)}),!(e&&n&&t))return!1;var r={NAME:e,EMAIL:n,PHONE:t,BOOKING:l},c=a.state.customerData;c.push(r),alert("Succesfully Added!"),a.setState({customerData:c})},a.render=function(){return l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(C,{customerData:a.state.customerData})),l.a.createElement("div",{className:"count-section"},"customerCount"===a.state.addNewCus?l.a.createElement(A,{customerData:a.state.customerData,addNewCusMngmntFn:a.addNewCusMngmnt}):"cancel"==a.state.addNewCus?l.a.createElement(A,{customerData:a.state.customerData,addNewCusMngmntFn:a.addNewCusMngmnt}):l.a.createElement(k,{submitFormFn:a.submitForm,cancelCustomerFormFn:a.cancelCustomerForm})))},a.state={customerData:[],addNewCus:"customerCount"},fetch("./CUSTOMER_DATABASE.json").then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({customerData:e})}).catch(function(e){console.log("err")}),a}return Object(m.a)(t,e),t}(l.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).setClassToShowFn=function(e){a.setState({classToShow:e})},a.render=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(b,null)),l.a.createElement("div",{id:"main-body"},l.a.createElement("div",{className:"sidebar-section"},l.a.createElement(g,{setClassToShowFn1:a.setClassToShowFn})),l.a.createElement("div",{className:"contents-section"},"bookings"===a.state.classToShow?l.a.createElement(N,null):l.a.createElement(O,null))))},a.state={classToShow:"bookings"},a}return Object(m.a)(t,e),t}(l.a.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return l.a.createElement(S,null)},a}return Object(m.a)(t,e),t}(l.a.Component);c.a.render(l.a.createElement(y,null),document.getElementById("root"))},6:function(e,t,a){},9:function(e,t){e.exports="data:image/png;base64,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"}},[[10,2,1]]]);
//# sourceMappingURL=main.9cebb8b0.chunk.js.map