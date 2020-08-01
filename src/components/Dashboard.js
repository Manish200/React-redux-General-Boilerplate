import React, { Component } from "react";
import Carouse from "./Carousel"
import { connect } from 'react-redux';
import { callaction } from '../actions/myaction'
class Dashboard extends Component {  
    render() {  
        return(
            
              <React.Fragment>
                <Carouse/>
                <h1 style={{textAlign:"center"}}>This is just the boilerplate for working with React.js and Redux</h1>
              </React.Fragment>
              
        )             
    }  
}
const mapDispatchToProps = (dispatch) => {
  return {
      callaction: (data) => { dispatch(callaction(data)) }
  }
}
const mapStateToProps = (state) => {
  return {
      userdata: state.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);