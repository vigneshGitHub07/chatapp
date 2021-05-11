import React, { Component } from "react";
import "../table/index.css";
import { VscSignIn } from "react-icons/vsc";
import { GiOpeningShell } from "react-icons/gi";
import { AiTwotoneCreditCard } from "react-icons/ai";
import { GiInjustice } from "react-icons/gi";
import Card from "../../card";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnameinput: "",
      Companynameinput: "",
      phonenumberinput: "",
      emailidinput: "",
      Addressnameinput: "",
      data: [],
      unittwo: {},
    //   unitthree: {},
      open: false,
    };
  }
  //  componentDidComponent(){

  //  }
//   validate=()=>{
//       var reEmail=/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
//       let errors=" ";
      
//       if(!this.state.emailidinput.match(reEmail)) {
//        errors = "Invalid email address";
        
//       }
//       if (errors) {
//         this.setState({ errors });
//         return false;
//       }

//       return true;
      
//     }

  onSubmit=(e)=> {
      e.preventDefault()
console.log("hello")
    //   const isValid=this.validate()
    // if (isValid) {
    // if (!this.state.emailidinput)
    //     {
        // var error = "please enter valid email id"
        let errors="invalid";
        

        var reEmail=/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        if(this.state.emailidinput.match(reEmail)){
            
        
    this.state.unittwo = {
      firstname: this.state.firstnameinput,
      companyname: this.state.Companynameinput,
      phonenumber: this.state.phonenumberinput,
      emailid: this.state.emailidinput,
      addressname: this.state.Addressnameinput,
    };
    this.state.data.push(this.state.unittwo);
        // }
    // this.state.carddata.push(this.state.unittwo);
    console.log(this.state.data, "dataarray");
    console.log(this.state.unittwo,"firstunittwo")
    this.setState({
      data: this.state.data,
      unittwo: this.state.unittwo,
    });
    this.cleardata();

        } else{
      
                 
                  if (errors) {
                    this.setState({ errors });
                    return false;

                  }
            
                  return true;
                  
                }
           
        
    //    console.log(this.state.carddata.firstname,"data")

//   }
}



  tocardtochild = (unittwo) => {
    // let { sendUserData } = this.props;
    // sendUserData(data);
    console.log("working")
    this.setState({
        unittwo
    })
//   
  };

  cleardata = () => {
    this.setState({
      firstnameinput: "",
      Companynameinput: "",
      phonenumberinput: "",
      emailidinput: "",
      Addressnameinput: "",
      errors:""
    });
  };
  openingfunction = () => {
      let {open}=this.state;
    this.setState({
      open: !open,
    });
  };

  //      tocardtochild=(i)=>{
  // let datas= this.state.data[i];
  // this.state.data.firstname=datas.firstname;
  // this.state.data.companyname=datas.companyname;
  // this.state.data.phonenumber=datas.phonenumber;
  // this.state.data.emailid= datas.emailid;
  // this.state.data.addressname = datas.addressname;
  //      }
  render() {
      let {open,firstnameinput}=this.state;
    return (
      <div>
        <div className="forpinkbckground">
          <div className="row">
            <div className="col-md-6">
              <form className={open ? "opened" : "notopened"}>
                <div className="row mt-5 d-flex justify-content-center">
                  <label>
                    <div className="row pt-3">
                      <div className="col-md-5">
                        <span className="cardname">Full Name:</span>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="Firstnameinput"
                          value={firstnameinput}
                          onChange={(e) => {
                            this.setState({ firstnameinput: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="row d-flex justify-content-center">
                  <label>
                    <div className="row">
                      <div className="col-md-5">
                        <span className="cardname">Email id:</span>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="emailidinput"
                          value={this.state.emailidinput}
                          onChange={(e) => {
                            this.setState({ emailidinput: e.target.value });
                          }}
                          
                        />
                        <span>{this.state.errors}</span>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="row d-flex justify-content-center">
                  <label>
                    <div className="row">
                      <div className="col-md-5">
                        <span className="cardname">Phone Number:</span>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="number"
                          name="phonenumberinput"
                          value={this.state.phonenumberinput}
                          onChange={(e) => {
                            this.setState({ phonenumberinput: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="row d-flex justify-content-center">
                  <label>
                    <div className="row">
                      <div className="col-md-5">
                        <span className="cardname">Company:</span>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="Companynameinput"
                          value={this.state.Companynameinput}
                          onChange={(e) => {
                            this.setState({ Companynameinput: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="row d-flex justify-content-center">
                  <label>
                    <div className="row">
                      <div className="col-md-5">
                        <span className="cardname">Address:</span>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="Addressnameinput"
                          value={this.state.Addressnameinput}
                          onChange={(e) => {
                            this.setState({ Addressnameinput: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-md-3">
                    <button
                      className="addbtn  mx-2"
                      onClick={(event) => this.onSubmit(event)}
                    >
                      <VscSignIn></VscSignIn> Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row containder searchcontact  mt-3">
          <div className="col-md-6 ">
            <input
              type="text"
              id="fname"
              name="searchcontact"
              placeholder="Search Contact "
              id="inputssearch"
              className="graybackground"
            ></input>
          </div>
          <div className="col-md-4 ml-5">
            <button onClick={() => this.openingfunction()} className="addbtn">
              {" "}
              + Add Contact
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 tbl">
            <table className="table">
              <thead className="tablehead">
                <tr>
                  <th> + </th>
                  <th>Basic Info</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data &&
                  this.state.data.map((datas, i) => {
                    return (
                      <tr onClick={() => this.tocardtochild( this.state.data[i])} key={i}>
                        <td className="pt-4">
                          <input type="checkbox"></input>
                        </td>
                        <td>
                          <div className="row">
                            <div className="col-md-1 ">
                              <p className="fornamecircle ">mk</p>
                            </div>
                            <div className="col-md-6 mx-4">
                              <div className="row">
                                <div className="col-md-6">
                                  <p>
                                    {" "}
                                    {datas.firstname} <br />{" "}
                                    <span className="contactgmail">
                                      {datas.emailid}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{datas.companyname}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-md-5">
<Card tocard ={this.state.data} 

tocardunittow={this.state.unittwo}
 />
                {/* <div className="row mt-3 mx-5">
                  <div className="col-md-12 card">
                    <div className="row">
                      <div className="cardshartnamehead col-md-12 ">
                        <p className="cardshartname">MH</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="cardshartnamehead col-md-12 ">
                        <p className="cardnameh">
                          {this.state.unittwo.firstname} <br />
                          <span className="contactgmailh">
                            Product Manager @ FlatCRM management
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-4">
                        <p className="contactgmail"> Full Name</p>
                      </div>
                      <div className="col-md-6">
                        <p className="cardname">
                          {this.state.unittwo.firstname}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="contactgmail">Email</p>
                      </div>
                      <div className="col-md-6">
                        <p className="cardname">
                          {this.state.unittwo.emailid}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="contactgmail">Phone</p>
                      </div>
                      <div className="col-md-6">
                        <p className="cardname">
                          {this.state.unittwo.phonenumber}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="contactgmail">Company</p>
                      </div>
                      <div className="col-md-6">
                        <p className="cardname">
                          {this.state.unittwo.companyname}
                        </p>
                      </div>
                    </div>
                    <div className="row pb-5">
                      <div className="col-md-4">
                        <p className="contactgmail">Address</p>
                      </div>
                      <div className="col-md-6">
                        <p className="cardname">
                          {this.state.unittwo.addressname}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row grybackground mt-2 mx-5">
                  <div className="col-md-1 pt-3">
                    <span className="pinkicon">
                      {" "}
                      <GiInjustice size={56} />
                    </span>
                  </div>
                  <div className="col-md-11">
                    <div className="row">
                      <div className="col-md-6 pt-3 mx-3">
                        <p className="cardname">
                          {" "}
                          Tax Evasion & Payout Notice <br />{" "}
                          <span className="contactgmail">
                            {" "}
                            Date: 7 May 2017{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
    );
  }
}
export default Table;
