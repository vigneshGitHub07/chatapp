
import React, { Component } from 'react'
import Header from '../components/sidenav/header';
import Contact from '../components/sidenav/header/contact';
import AddContact from '../components/sidenav/addcontact';
import Table from '../components/sidenav/header/table';
import SideMenu from '../components/sidenav/sidemenu';
import {Link} from 'react-router-dom';


 class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
< SideMenu />
         </div>   
         <div className="col-md-11">
         <div className="row">
          <div className="col">
          <Header />
          </div>
          </div>
        <div className="row">
          <div className="col">
<Contact/>
          </div>
        </div>
        <div className="row">
          <div className="col">
         <Link to='/A'>  < AddContact /> </Link> 
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            < Table />
          </div>
          

        </div>
           </div>   
         </div>
        
      </div>
    )
  }
}
export default App
