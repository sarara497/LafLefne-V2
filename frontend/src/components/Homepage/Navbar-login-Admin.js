import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavLogin from './NavbarAdlogin'


class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state={
            isAdmin:''
        }
    }

    render(){
      
        return(
            <section className="page-section" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center"> <br/><br/> <br/><br/>
                  <h2 className="section-heading text-uppercase"> Add Trip </h2>
                </div>
                </div>
                </div>
                </section>

        )
    }
}

export default AdminPage