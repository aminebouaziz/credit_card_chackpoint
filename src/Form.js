import React,{Component} from 'react'
import "./form.css"

class Form extends Component {
    constructor(){
        super()
        this.state={
           
        }
    }
  


    fctCode = (c) => {
        
        let arr = []
        arr = Array.from(c)
        
        arr.length = 5

        
        
        let codef = arr.join('')
        let newCode = ''
        for (var i = 0; i < codef.length; i++) {
    
            if (i === 2 ) {
                newCode = newCode + "/"
            }
            newCode = newCode + codef[i]
        }
        return newCode
    }
    render() { 
        return (  

            <div className="form">
                <p><input type="text"  placeholder="Name"  onChange={(e)=>this.props.onNameChange(e.target.value)}/></p>
                <p><input type="text" value={this.fctCode(this.props.code)} placeholder="Code" maxLength="5" onChange={(e)=>this.props.onCodeChange(e.target.value)}/></p>
                <p><input type="text" placeholder="Company" onChange={(e)=>this.props.onCnameChange(e.target.value)}/></p>
                <p><input type="text" value={this.props.num} placeholder="Number" maxLength="16" onChange={(e)=>this.props.onNumChange(e.target.value)}/></p>
            </div>
         )
    }
}
 
export default Form;