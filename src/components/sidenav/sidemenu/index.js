import React, { Component } from 'react'
import {BsJustifyLeft} from 'react-icons/bs'
import '../sidemenu/index.css'
import {AiOutlineHome} from 'react-icons/ai'
import {IoPersonOutline} from 'react-icons/io5'
import{GiBlackBook} from 'react-icons/gi'
import {BiTimeFive} from 'react-icons/bi' 
import {IoLogoFoursquare} from 'react-icons/io'
import {BiCalendar} from 'react-icons/bi'
import {GiVibratingSmartphone} from 'react-icons/gi'
 class SideMenu extends Component {
    render() {
        return (
            <div>
                <div className="row navigation">
                    <div className="row ">
                    <div className="col-md-12 foriconheiht">
                   < BsJustifyLeft size={48} />
                    </div>
                    <div className="col-md-12 foriconheiht">
                   < AiOutlineHome size={28} />
                    </div>
                    <div className="col-md-12 foriconheiht ">
                   < IoPersonOutline size={28} />
                    </div>
                    <div className="col-md-12 foriconheiht ">
                   < GiBlackBook size={28} />
                    </div>
                    <div className="col-md-12 foriconheiht">
                   < BiTimeFive size={28} />
                    </div>
                    <div className="col-md-12 foriconheiht">
                   < IoLogoFoursquare size={28} />
                    </div>
                    <div className="col-md-12 foriconheiht">
                   < BiCalendar size={28} />
                    </div>
                    <div className="col-md-12 foriconheiht">
                   < GiVibratingSmartphone size={28} />
                    </div>
                    </div>
                  
                </div>
            </div>
        )
    }
}
export default SideMenu