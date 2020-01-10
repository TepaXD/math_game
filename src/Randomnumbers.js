import React from 'react';

class randomnumbers extends React.Component{
    constructor(props) {
        super(props);
        this.num1= 0;
        this.num2= 0;
        this.answer= 0;
    }
    getRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getAnswer(){
        return{
        num1: this.num1 = this.getRandom(1,11),
        num2: this.num2 = this.getRandom(1,11),
        answer: this.answer = this.num1 + this.num2,
        };
    
      
        
    }
    render(){
        let data = this.getAnswer();
        return(
    <h1>{data.num1}+{data.num2}={data.answer}</h1>
            
        );

    }
}

export default randomnumbers;