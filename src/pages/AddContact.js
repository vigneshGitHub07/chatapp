// import React, { Component } from 'react'
// import {VscSignIn} from "react-icons/vsc";
// import '../pages/AddContact.css';
// import {Link} from 'react-router-dom';
// import Child from '../components/sidenav/header/table/index';

//  class AddContact extends Component {
  //   constructor(props){
  //       super(props);
  //       this.state={
  //         firstnameinput:"",
  //         Companynameinput:"",
  //         phonenumberinput:"",
  //         emailidinput:"",
  //         Addressnameinput:"",
  //         data :[],
  //       };
  //     }
  //    //  componentDidComponent(){
       
  //    //  }
  //    onSubmit(event){
  //       console.log(event,"sub")
   
  //  event.preventDefault();
        
       
  //      let unit = { 
  //        firstname : this.state.firstnameinput , 
  //        companyname: this.state.Companynameinput ,
  //         phonenumber:this.state.phonenumberinput ,
  //          emailid:this.state.emailidinput ,
  //          addressname: this.state.Addressnameinput,
  //      }
         
  //      // this.setState({
  //      //   data:unit
  //      // })
  //       this.state.data.push(unit)
  //      this.setState({
  //        data : this.state.data,
        
  //      })
  //    this.cleardata();
  //    }
   
  //    cleardata=()=>{
  //  this.setState({
  //    firstnameinput:"",
  //    Companynameinput:"",
  //    phonenumberinput:"",
  //    emailidinput:"",
  //    Addressnameinput:"",
  //  })
  //    }
      //  render() {
      //      return (
      //          <div>
                   {/* <form>
   <div className="row mt-5 d-flex justify-content-center">
     
     <label>
       
      <span className="cardname">Full Name:</span> 
       
       
       <input type="text" name="Firstnameinput" value={this.state.firstnameinput} onChange={(e)=>{this.setState({firstnameinput:e.target.value})}}/>
       </label>
     
   
     </div>
     <div className="row d-flex justify-content-center">
   
   <label>
   <span className="cardname">Email id:</span>
     <input type="text"  name="emailidinput" value={this.state.emailidinput} onChange={(e)=>{this.setState({emailidinput: e.target.value})}}/>
   </label>
   </div>

     <div className="row d-flex justify-content-center">
   
     <label>
     <span className="cardname">Phone Number:</span>
       <input type="number" name="phonenumberinput" value={this.state.phonenumberinput} onChange={(e)=>{this.setState({phonenumberinput:e.target.value})}}/>
     </label>
     </div>
     <div className="row d-flex justify-content-center">
     
     <label>
     <span className="cardname">Company:</span>
       <input type="text" name="Companynameinput" value={this.state.Companynameinput} onChange={(e)=>{this.setState({Companynameinput:e.target.value})}}/>
     </label>
     </div>
     <div className="row d-flex justify-content-center">
     
     <label>
     <span className="cardname">Address:</span>
       <input type="text" name="Addressnameinput" value={this.state.Addressnameinput} onChange={(e)=>{this.setState({Addressnameinput:e.target.value})}}/>
     </label>
     </div>
    <div className="row d-flex justify-content-center">
     <button className="addbtn  mx-3" onClick={(e)=>this.onSubmit(e)}><VscSignIn></VscSignIn> Submit</button> <span> <Link to='/'> <button className="addbtn mx-3 "><VscSignIn></VscSignIn> Home</button> </Link> </span>
    </div>
    < Child dataParentToChil = {this.state.data} />
   
   </form> */}
   {/* <div class="row tablelist">
   <table class="table mt-4">
     <thead>
       <tr>
         
         <th scope="col"><span className="for-white-clr">Full Name</span></th>
         <th scope="col"><span className="for-white-clr">Company Name</span></th>
         <th scope="col"><span className="for-white-clr">Phone Number</span></th>
         <th scope="col"><span className="for-white-clr">Mail Id</span></th>
         <th scope="col"><span className="for-white-clr">Address</span></th>
       </tr>
     </thead>
     <tbody>
     {this.state.data.map((datas,index) => {
       return(
         <tr key={index}>
         <td > {datas.firstname}</td>
         <td > {datas.companyname} </td>
         <td > {datas.phonenumber} </td>
         <td >{datas.emailid}</td>
         <td>{datas.addressname}</td>
         </tr>
     )
       })}
     </tbody>
   </table>
   </div> */}
//                </div>
//            )
//        }
//    }
// export default AddContact