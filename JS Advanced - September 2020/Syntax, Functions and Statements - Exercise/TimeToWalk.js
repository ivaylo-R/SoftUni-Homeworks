function calculateTimeToWalk(steps,footLength,speed){

   let distance=steps*footLength;
   let breakTimeInSeconds = Math.floor(distance/500)*60;
   let timeInSeconds = Math.round(distance/speed*3.6 + breakTimeInSeconds);
   let seconds= timeInSeconds%60;
   let minutes= ((timeInSeconds-seconds)/60)%60;
   let hours=((timeInSeconds-seconds-minutes*60)/60)%60;

   console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

calculateTimeToWalk(4000, 0.60, 5);