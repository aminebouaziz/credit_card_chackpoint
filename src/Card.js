import React, { Component } from 'react'
import './card.css'
import puce from "./puce.png"
import mLogo from "./mstLogo.png"

class Card extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    autoNum = (n) => {
        let arr = []
        arr = Array.from(n)
        arr.length = 16

        for (var i = 0; i < arr.length; i++) {

            if (arr[i] === undefined) {
                arr[i] = "•"
            }
        }

        let numf = arr.join('')
        let newNumf = ''
        for (var i = 0; i < numf.length; i++) {

            if (i === 4 || i === 8 || i === 12) {
                newNumf = newNumf + " "
            }
            newNumf = newNumf + numf[i]
        }
        
        return newNumf
    }
  codeFct=(c)=>{
  
  
    let arr = []
    arr = Array.from(c)
  

    arr.length = 4
    
    
    
    
    
    let arr1=[],arr2=[]
        arr1.push(
            arr[0],
            arr[1]
        )
        arr2.push(
            arr[2],
            arr[3]
        )
            

        let mot1=arr1.join('')
        let mot2=arr2.join('')
       
            if( mot1<=12  ){
                for (var i = 0; i < arr.length; i++) {

                    if (arr[i] === undefined) {
                        arr[i] = "•"
                    }
                }  
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
else{( mot1=="12")
    return '12/'+mot2

                }


   

  }
   
    
    render() {
        return (

          
            <div className="card">
                <h1 className="name">  {this.props.name}</h1>
                <h1 className="code"> {this.codeFct(this.props.code)}</h1>
                <h1 className="cName">{this.props.cName}</h1>
                <h1 className="num"> {this.autoNum(this.props.num)}</h1>
                <img className="puce" src={puce} />
                <img className="mstLogo" src={mLogo} />
            </div>
        )
    }
}
export default Card 