import React, { Component } from 'react'
import '../contact/index.css'
import {MdPermContactCalendar} from 'react-icons/md'
import {AiOutlineCaretDown} from 'react-icons/ai'

 class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row  container mt-5">
                    <div className="col-md-4">
                        <div className="row">
<div className="col-md-2">
    <span className="pinkicon">< MdPermContactCalendar size={56} /></span>
</div>
<div className="col-md-5">
    <p className="contact">Contacts</p>
    <p className="wellcome">Wellcome to the page</p>
</div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-2">
                    <p className="wellcome">Sort by: <span className="datecreated mx-2 mt-5">Date Created <AiOutlineCaretDown /></span> </p> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact