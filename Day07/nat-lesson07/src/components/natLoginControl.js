import React, { Component } from 'react';
import natLoginComp from './natLoginComp';
import natLogoutComp from './natLogoutComp';

class natLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    natHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let natElement = isLoggedIn?<natLoginComp /> : <natLogoutComp />
        return (
            <div className='alert alert-danger'>
                {natElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.natHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default natLoginControl;