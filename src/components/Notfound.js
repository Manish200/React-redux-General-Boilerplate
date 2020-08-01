import React, { Component } from "react";

class Notfound extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }
  render() {
          return (
            <React.Fragment>
                <Navbar/>
                <div style={{margin:"auto",height:"100%"}}>
                    <div style={{paddingTop: "10px",
                        paddingRight: "20px",
                        paddingBottom: "40px",
                        paddingLeft: "20px"}}>
                        <p className="style404"><strong>404</strong></p>
                        <p style={{fontSize:"30px"}} className="para404"><strong>We could not find the page you were looking for, the link you followed may be broken, or the page may have been removed.</strong></p>
                        <p style={{alignContent:"center",alignItems:"center",left:"50%",display: "flex", justifyContent: "center"}}><button className="but404 btn btn-info btn-large mlT mlB" onClick={() => this.props.history.push('/')}>Go back to Homepage</button></p>
                    </div>

                </div>
            </React.Fragment>   
    );
  }

}



export default Notfound;