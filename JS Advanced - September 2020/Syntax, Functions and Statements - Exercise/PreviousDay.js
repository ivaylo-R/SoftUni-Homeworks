function getPreviousDay(year,month,day){
        let currentDay= new Date(year,month,day);
            
        currentDay.setDate(currentDay.getDate()-1);
        
        console.log(`${currentDay.getFullYear()}-${currentDay.getMonth()}-${currentDay.getDate()}`);
    }
    
    getPreviousDay(2016, 9, 30);