import React from 'react';

class randomnumbers extends React.Component{
    constructor(props) {
        super(props);
        this.num1= 0;
        this.num2= 0;
        this.answer= 0;
        this.fakeans1 = 0;
        this.fakeans2 = 0;
    }
    getRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getAnswer(){
        this.num1 = this.getRandom(1,11);
        this.num2 = this.getRandom(1,11);
        this.answer = this.num1 + this.num2;
        this.fakeans1 = this.getRandom(this.answer-this.getRandom(1, 7),this.answer+this.getRandom(1, 7));
        this.fakeans2 = this.getRandom(this.answer-this.getRandom(1, 9),this.answer+this.getRandom(1, 9));
        while(this.fakeans1 === this.answer || this.fakeans1 < 0){
            this.fakeans1 = this.getRandom(this.answer-this.getRandom(1, 7),this.answer+this.getRandom(1, 7));
        }
        while(this.fakeans2 === this.answer || this.fakeans2 < 0){
            this.fakeans2 = this.getRandom(this.answer-this.getRandom(1, 7),this.answer+this.getRandom(1, 7)); 
        }
        while(this.fakeans2 === this.answer || this.fakeans2 < 0){
            this.fakeans2 = this.getRandom(this.answer-this.getRandom(1, 9),this.answer+this.getRandom(1, 9));
        }
        while(this.fakeans2 === this.fakeans1 || this.fakeans2 < 0){
            this.fakeans2 = this.getRandom(this.answer-this.getRandom(1, 9),this.answer+this.getRandom(1, 9));
        }
            
    
        return{
        num1: this.num1,
        num2: this.num2,
        answer: this.answer,
        fakeans1: this.fakeans1,
        fakeans2: this.fakeans2
        };
    
      
        
    }
    render(){
        let data = this.getAnswer();
        return(
    <h1>{data.num1}+{data.num2}={data.answer} , {data.fakeans1} , {data.fakeans2}</h1>
            
        );

    }
}

export default randomnumbers;