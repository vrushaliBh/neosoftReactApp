import {Component} from "react"
import axios from "axios"

class Login extends Component{
    constructor(){
        super()
        this.state ={
          
        }
    }
    user = {}

    getEmail =(event)=>{
        this.user.email = event.target.value
    }
    getPassword = (event)=>{
        this.user.password = event.target.value
    }
    login = ()=>{
        if(!this.user.email || !this.user.password ){
            this.setState({
                errorMessage:"Please Fill Details"
            })
        }
        else{
            let apiurl ="https://apibyashu.herokuapp.com/api/login"    
            axios ({
                url:apiurl, method:"post", data:this.user
            }).then((response=>{
                console.log("login success")
            }),
            (error=>{ console.log("failed")}))
        }
        console.log("...... user details" , this.user)
       
       
    }
    render(){
        return(
            <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={this.getEmail}></input>
                </div>
                
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                <div style={{color:"green"}}>
                    {this.state.successMessage}
                </div>
              <button className="btn btn-primary" onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Login