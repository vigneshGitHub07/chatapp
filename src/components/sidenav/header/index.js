import React, { Component } from 'react'
import '../header/index.css'
import {IoSearchCircleOutline} from 'react-icons/io5'
import {AiOutlinePlus} from 'react-icons/ai'
import{AiOutlineMail} from 'react-icons/ai'
import{AiOutlineCaretDown} from 'react-icons/ai'
import{AiOutlineBell} from 'react-icons/ai'
 class Header  extends Component {
    render() {
        return (
            <div>
                <div className="row pt-3 head">
                    <div className="col-md-8 ml-5 ">
                       <span className="serachicon"><IoSearchCircleOutline size= {32} /></span> 
                    </div>
<div className="col-md-3">
    <p> <AiOutlinePlus/> <span className="addp">Add</span><span className="mx-3 pinkicon"><AiOutlineMail/></span><span className="mx-3"> Vignesh <AiOutlineCaretDown/></span><span className="mx-2 pinkicon"><AiOutlineBell /></span></p>
</div>

                </div>
            </div>
        )
    }
}
export default Header