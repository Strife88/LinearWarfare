
function Probability(hitChance) {
 if (Math.round(Math.random()*100)<= hitChance) {
   return "hit";
}
 else {
   return "miss";
 }
}

var precentages = [];
var arrayValue = 0;
for(i=0;i<20;i++) {
    arrayValue +=5;
    precentages.push(arrayValue);
}

var hitChance = []

function getHitChanceValues(){
for(i=0;i<20;i++) {
    hitChance.push(Probability(precentages[i]));

}
console.log(hitChance);
}
getHitChanceValues();
var createTag = function(tag,parent,text,idenifier,classname1) {
 var element = document.createElement(tag);
 if(classname1) {
 element.classList.add(classname1);
 }
 if(text){
 element.innerHTML = text;
 }
 var container = document.getElementsByClassName(parent);
 container[0].appendChild(element);
 
 if(idenifier){
 element.setAttribute("id",idenifier);
 }
};


for(i=0;i<20;i++) {
    createTag('p','container',precentages[i],"Precent-"+(i));
};
for(i=0;i<20;i++) {
    createTag('p','container',hitChance[i],"Result-"+(i));
};



document.getElementById("reset").addEventListener("click",function(){
    getHitChanceValues();
});