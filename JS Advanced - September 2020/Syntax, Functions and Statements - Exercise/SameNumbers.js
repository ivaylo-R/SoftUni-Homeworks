function checkSameNumbersInDigit(x){
        let sumOfDigits=0;
        let number=x;
        while(number){
            sumOfDigits += number % 10;
            number=Math.floor(number/10);
        }
    
    let first = x % 10;
        while (x) {
            if (x % 10 !== first){
                console.log(false)
                console.log(sumOfDigits);
                return;
            }
            
            x = Math.floor(x / 10);
        }
    
        console.log(true)
        console.log(sumOfDigits); 
    }

checkSameNumbersInDigit(2222222);