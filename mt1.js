function calculate(){
let userArray=new Array;
    for(i=0;i<5;i++){
    userArray.push(Number(prompt("enter the marks")));
    }

let total=document.getElementById("total");
let percentage=document.getElementById("percentage");
let result=document.getElementById("result");

let t=0;
 for(i=0;i<5;i++){
    t+=userArray[i];
    }
let p=(t/500)*100;
let r;

if(p>=80){
    r="FIRST";
}
else if(p>=60 && p<80){
    r="SECOND";
}
else{
    r="FAIL";
}
total.innerHTML=t;
percentage.innerHTML=p;
result.innerHTML=r;
}