function calculateresult(){
    let n = document.getElementById("subjects").value;
    let total=0;
    for(let i=0;i<n;i++){
        let marks =Number(prompt("enter the subjects"+i));
        total=total+marks;
    }
    let avg=total/n;
    let grade;
    let result;
    if(avg >=90){
        grade="A+";
    } 
     else if(avg>=80){
        grade="A";
     }
     else if(avg>=70){
        grade="B+";
     }
     else if(avg>=60){
        grade="B";
     }
     else if(avg>=50){
        grade="c+";
     }
     else if(avg>=40){
        grade="c";
     }
     else if(avg<40){
        grade="f";
     }

     if(avg>=40){
        result="pass";
     }
     else{
        result="fail";
     }
     
     document.getElementById("result").innerHTML="Total Marks="+total+"<br>"+"Average="+avg+"<br>"+"Grade="+grade+"<br>"+"Result="+result;

     
}