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

    randomizeOrder(fakeans1,fakeans2,answer){
        let x = this.getRandom(1,4);
        let temp;
        if(x === 1){
            temp = fakeans1;
            return{
                fakeans1: fakeans1 = fakeans2,
                fakeans2 : fakeans2 = answer,
                answer : answer = temp,
                
            };
        }
        else if(x === 2){
            temp = fakeans1;
            return{
                fakeans1: fakeans1 = answer,
                answer : answer = fakeans2,
                fakeans2 : fakeans2 = temp
            };
            
        }
        else if(x === 3){
            return{
                fakeans1: fakeans1,
                fakeans2 : fakeans2,
                answer : answer
            };
        }
    }

    getAnswer(){
        let x = 4; //menetelmä
        let y = 3; //vaikeustaso
        let rem;
        if(x === 1 && y === 1){
            this.num1 = this.getRandom(1,6);
            this.num2 = this.getRandom(1,5);
            this.answer = this.num1 + this.num2;
        }
        else if(x === 1 && y === 2){
            this.num1 = this.getRandom(5,16);
            this.num2 = this.getRandom(5,15);
            this.answer = this.num1 + this.num2;
        }
        else if(x === 1 && y === 3){
            this.num1 = this.getRandom(10,31);
            this.num2 = this.getRandom(10,21);
            this.answer = this.num1 + this.num2;
        }

        else if(x === 2 && y === 1){
            this.num1 = this.getRandom(1,10);
            this.num2 = this.getRandom(1,5);
            while (this.num1<this.num2){
                this.num2 = this.getRandom(1,5); 
            }
            this.answer = this.num1 - this.num2;
        }
        else if(x === 2 && y === 2){
            this.num1 = this.getRandom(10,21);
            this.num2 = this.getRandom(5,11);
            while (this.num1<this.num2){
                this.num2 = this.getRandom(5,11); 
            }
            this.answer = this.num1 - this.num2;
        }
        else if(x === 2 && y === 3){
            this.num1 = this.getRandom(20,41);
            this.num2 = this.getRandom(10,26);
            while (this.num1<this.num2){
                this.num2 = this.getRandom(10,26); 
            }
            this.answer = this.num1 - this.num2;
        }
        
        else if(x === 3 && y === 1){
            this.num1 = this.getRandom(1,4);
            this.num2 = this.getRandom(1,4);
            this.answer = this.num1 * this.num2;
        }
        else if(x === 3 && y === 2){
            this.num1 = this.getRandom(2,6);
            this.num2 = this.getRandom(2,6);
            this.answer = this.num1 * this.num2;
        }
        else if(x === 3 && y === 3){
            this.num1 = this.getRandom(3,11);
            this.num2 = this.getRandom(3,11);
            this.answer = this.num1 * this.num2;
        }

        else if(x === 4 && y === 1){
            this.num1 = this.getRandom(1,11);
            this.num2 = this.getRandom(1,6);
            rem = this.num1 % this.num2;
            while(rem !== 0){
                this.num1 = this.getRandom(1,11);
                this.num2 = this.getRandom(1,6);
                rem = this.num1 % this.num2;
            }
            this.answer = this.num1 / this.num2;
        
        }
        else if(x === 4 && y === 2){
            this.num1 = this.getRandom(10,41);
            this.num2 = this.getRandom(2,6);
            rem = this.num1 % this.num2;
            while(rem !== 0){
                this.num1 = this.getRandom(10,41);
                this.num2 = this.getRandom(2,6);
                rem = this.num1 % this.num2;
            }
            this.answer = this.num1 / this.num2;
        }
        else if(x === 4 && y === 3){
            this.num1 = this.getRandom(30,61);
            this.num2 = this.getRandom(2,11);
            rem = this.num1 % this.num2;
            while(rem !== 0){
                this.num1 = this.getRandom(10,61);
                this.num2 = this.getRandom(2,11);
                rem = this.num1 % this.num2;
            }
            this.answer = this.num1 / this.num2;
        }

        this.fakeans1 = this.getRandom(this.answer-this.getRandom(0, 9),this.answer+this.getRandom(1, 9));
        this.fakeans2 = this.getRandom(this.answer-this.getRandom(1, 11),this.answer+this.getRandom(1, 11));
        while(this.fakeans1 === this.answer || this.fakeans1 < 0){
            this.fakeans1 = this.getRandom(this.answer-this.getRandom(0, 9),this.answer+this.getRandom(1, 9));
        }
        while(this.fakeans2 === this.answer || this.fakeans2 < 0){
            this.fakeans2 = this.getRandom(this.answer-this.getRandom(0, 9),this.answer+this.getRandom(1, 9)); 
        }
        while(this.fakeans2 === this.answer || this.fakeans2 < 0){
            this.fakeans2 = this.getRandom(this.answer-this.getRandom(0, 11),this.answer+this.getRandom(1, 11));
        }
        while(this.fakeans2 === this.fakeans1 || this.fakeans2 < 0){
            this.fakeans2 = this.getRandom(this.answer-this.getRandom(0, 11),this.answer+this.getRandom(1, 11));
        }
        let numbers = this.randomizeOrder(this.fakeans1, this.fakeans2, this.answer);
        return{
        num1: this.num1,
        num2: this.num2,
        answer: numbers.answer,
        fakeans1: numbers.fakeans1,
        fakeans2: numbers.fakeans2
        };
    
      
        
    }
    render(){
        let data = this.getAnswer();
        return(
    <h1>{data.num1}/{data.num2}={data.answer} , {data.fakeans1} , {data.fakeans2}</h1>
            
        );

    }
}

export default randomnumbers;