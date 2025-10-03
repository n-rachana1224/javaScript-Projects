// let name=prompt('what is your name:');
// let height=Number(prompt("Enter your Height (cm)"));
// let weight=Number(prompt("Enter your Weight(kg)"));
let bmiform=document.getElementById("cal");
bmiform.addEventListener("click",function(e){
    
const name=document.getElementById("name").value;
const height=Number(document.getElementById("height").value);
const weight=Number(document.getElementById("weight").value);
//convert cm into meters
console.log(name,height,weight);
let heightInMeters=height/100;
let bmi=(weight/(heightInMeters*heightInMeters)).toFixed(2);

let category="";
if (bmi<18.5){
    console.log("Category:Slim");
    category="Slim";

}else if(bmi>=18.5 && bmi<25){
    console.log("Category:Normal");
    category="Normal";
}else{
    console.log("Category:Fat");
    category="Fat";
}
document.getElementById("result").textContent =
        `${name}, your BMI is ${bmi}. Category: ${category}`;
});
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").textContent = "";
});
