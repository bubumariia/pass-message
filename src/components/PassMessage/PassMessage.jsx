import React from "react";

class PassMessage extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue: '', 
            check: false
        }
    }
    
    handleClick = ()=>{
        {
            if(this.state.inputValue === ''){
                this.setState({check:false})
                console.log(this.state.check)
            }else{
                this.setState({check:!this.state.check})
                
            }
        }
        

    }
    handleClearBtn = () =>{
        this.setState({inputValue:''})
        this.setState({check:!this.state.check})
        {
            // i couldn't select the input by using the React, it does by PROPS
            const input = document.querySelector('input')
            input.value = ''
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1>A Message You Would Like To Pass</h1>
                    <input className="input" type="text" id="messageInput" name="inputValue" value = {this.state.value} onChange = {(event) => this.setState({inputValue:event.target.value})}/>
                    <button  onClick={this.handleClick}>Send</button>
                    <button onClick={this.handleClearBtn}>Clear</button>
                    <h2>Last Message Delivered</h2>
                    <p>{this.state.check ? this.state.inputValue  : ''}</p>

                </div>
            
            </React.Fragment>
        )
    }
}
export default PassMessage