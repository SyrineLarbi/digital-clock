let hour=document.getElementById("hours");
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('second');
let type=document.getElementById('type')


function updateClock(){
   let numeberHours=new Date().getHours();
   let numberMinutes=new Date().getMinutes();
   let numberSecond=new Date().getSeconds();
   let ampm='AM'
    if (numeberHours>12){
        numeberHours=numeberHours-12;
        ampm='PM';
    }
    if(numeberHours<10 ){
        numeberHours="0" + numeberHours;
       
    }else if(numberSecond<10){
        numberSecond="0" + numberSecond;
    } else if(numberMinutes<10){
        numberMinutes="0" + numberMinutes;
    }
        
    hour.innerText = numeberHours;
    minutes.innerText=numberMinutes;
    seconds.innerText=numberSecond;
    type.innerText=ampm;
    console.log(numberMinutes);
    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();