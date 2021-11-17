function calorie(input) {
    let result = {};
    let food="";

    for (let i = 0; i < input.length; i++) {
        if(i%2===0){
            food=input[i];
            result[food]=0;
        }else{
            result[food]=Number(input[i]);
        }
    }

    console.log(result);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);