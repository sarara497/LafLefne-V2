import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


class AddTrip extends Component {
constructor(props){
    super(props)
    this.state={
        name:'',
        tripType:'',
        explore:'',
        price:'',
        date:'',
        deadLine:'',
        tripGuide:'',
        maximumNumPerTrip: '',
        description:'',
        image:''
    }
    this.handleChangeInput=this.handleChangeInput.bind(this)
    this.handelOnClick=this.handelOnClick.bind(this);

}

handleChangeInput(e){
    this.setState({[e.target.name]:e.target.value});
    
}
handelOnClick = async (e)=>{
    e.preventDefault();
    console.log("state = ",this.state);
    axios.post('/addTrip',this.state)
    .then((response)=> {
      console.log(response)
      
    })

    this.setState({//to clear all inputs
      name:'',
      tripType:'',
      explore:'',
      price:'',
      date:'',
      deadLine:'',
      tripGuide:'',
      maximumNumPerTrip: '',
      description:'',
      image:''
        })

}
render(){
    return(
        <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center"> <br/><br/> <br/><br/>
              <h2 className="section-heading text-uppercase"> Add Trip </h2>
            </div>
          </div> <br/><br/>
          <div className="row">
         
            <div className="col-sm-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" value={this.state.name} onChange={this.handleChangeInput} id="tilie" name="name" type="text" placeholder="Trip Name *" required="required" data-validation-required-message="Trip Name." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.tripType} onChange={this.handleChangeInput} id="tripType" name="tripType" type="text" placeholder="Trip Type *" required="required" data-validation-required-message=" Trip Type." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.explore} onChange={this.handleChangeInput} id="explore" name="explore" type="text" placeholder="explore*" required="required" data-validation-required-message="Explore." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.price} onChange={this.handleChangeInput} id="price" name="price" type="text" placeholder="Price Trip *" required="required" data-validation-required-message="Price Trip." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                         <input className="form-control" onChange={this.handleChangeInput}  value={this.state.image} id="image" name="image" type="text" placeholder=" url Trip Image*" required="required" data-validation-required-message="Trip Image."/>
                         <p className="help-block text-danger"></p>
                       </div>
                       <div className="form-group">
                      <input className="form-control" value={this.state.maximumNumPerTrip} onChange={this.handleChangeInput} id="maximumNumPerTrip" name="maximumNumPerTrip" type="text" placeholder="maximumNumPerTrip*" required="required" data-validation-required-message="maximumNumPerTrip." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6"><br/>
                    <div className="form-group">
                      <h6>Trip Date </h6>
                      <input className="form-control" id="phone" value={this.state.date} onChange={this.handleChangeInput} name="date" type="date" placeholder="Trip date*" required="required" data-validation-required-message="TRip Date." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                    <h6>DeadLine Trip </h6>
                      <input className="form-control" value={this.state.deadLine} onChange={this.handleChangeInput} id="deadLine" name="deadLine" type="date" placeholder="DeadLine *" required="required" data-validation-required-message="DeadLine of Trip" />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.tripGuide} onChange={this.handleChangeInput} id="tripGuide" name="tripGuide" type="text" placeholder="Trip Guide *" required="required" data-validation-required-message="Trip Guide." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" value={this.state.description} onChange={this.handleChangeInput} id="description" name="description" type="text" placeholder="Description*" required="required" data-validation-required-message="Description." />
                      <p className="help-block text-danger"></p> <br/><br/>
                    </div>
                    
                  
      
                  </div><br/><br/><br/><br/>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id=" Add Form " onClick={this.handelOnClick} className="btn btn-primary btn-xl text-uppercase" type="submit">Add Trip</button>
                  </div>
                  <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> 
    )
}
}

export default AddTrip;