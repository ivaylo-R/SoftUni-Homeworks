function solve(x,cmd1,cmd2,cmd3,cmd4,cmd5){
    let input=new Array();
    input.push(cmd1,cmd2,cmd3,cmd4,cmd5);

    for (let i = 0; i < input.length; i++) {
        let cmd= input[i];
        if(cmd === 'chop'){
            console.log(x/=2);
        }
        else if(cmd === 'dice'){
            x=Math.sqrt(x);
            console.log(x);
        }
        else if(cmd === 'spice'){
            console.log(x+=1);
        }
        else if(cmd === 'bake'){
            console.log(x*=3);
        }
        else{
            x=x-(x*0.2);
            console.log(Number(x).toFixed(1));
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');