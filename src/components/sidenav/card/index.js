import React, { Component } from 'react'
import '../card/index.css'
import {GiInjustice} from 'react-icons/gi'
 class Card extends Component {
     constructor(props){
         super(props);

     }
    //  tocardtochild=()=>{
    //     this.props.tochildcarddata(this.state.unittwo);
    //     this.setState({unittwo:this.state.unittwo})
    //  }
     
    //  tocardtochild=()=>{
    //      this.props.tocardtochild
    //  }
     sample=()=>{
         console.log(this.props.tocard,"card first nameeeeeeeeeeeeee")
         console.log(this.props.tocardunittow,"cardunit")
     }
    render() {
        return (
            <div>
                {/* {this.state.carddata && this.state.carddata.map((datas, index)=>{
                    return( */}
{/* <div key={index}> */}

<div>
<div className="row mt-3 mx-5">
                    <div className="col-md-12 card">
                        <div className="row">
                            <div className="cardshartnamehead col-md-12 ">
                                <p className="cardshartname">MH</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cardshartnamehead col-md-12 ">
                                <p className="cardnameh">{this.props.tocardunittow.firstname} <br/><span className="contactgmailh">Product Manager @ FlatCRM management</span></p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                           <p className="contactgmail" > Full Name</p>
                            </div>
                            <div className="col-md-6">
                                <p className="cardname">{this.props.tocardunittow.firstname}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                           <p className="contactgmail" >Email</p>
                            </div>
                            <div className="col-md-6">
                                <p className="cardname">{this.props.tocardunittow.emailid}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                           <p className="contactgmail" >Phone</p>
                            </div>
                            <div className="col-md-6">
                                <p className="cardname">{this.props.tocardunittow.phonenumber}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                           <p className="contactgmail" >Company</p>
                            </div>
                            <div className="col-md-6">
                                <p className="cardname">{this.props.tocardunittow.companyname}</p>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col-md-4">
                           <p className="contactgmail" >Address</p>
                            </div>
                            <div className="col-md-6">
                                <p className="cardname">{this.props.tocardunittow.addressname}</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="row grybackground mt-2 mx-5">
                        <div className="col-md-1 pt-3">
                           <span className="pinkicon" > <GiInjustice size={56} /></span>
                        </div>
                        <div className="col-md-11">
                            <div className="row">
                                <div className="col-md-6 pt-3 mx-3">
                                <p className="cardname"> Tax Evasion & Payout Notice <br/> <span className="contactgmail"> Date: 7 May 2017 </span></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

</div>
                    {/* )
                }
                )} */}
                
            </div>
        )
    }
}
export default Card