function calcBase() {
  var stavka = document.getElementById("baseStavka").value;
  var baseZP = document.getElementById("baseZP").value;
  var timeFact = document.getElementById("timeFact").value;
  var result = ((baseZP*timeFact)/stavka).toFixed(2);
  var text = document.getElementById("resultBase");
  text.innerHTML = result;
}

var button = document.getElementById("button");
button.addEventListener('click', calcBase);

function calcKVP() {
  var incomePlan = document.getElementById("incomePlan").value;
  var incomeFact = document.getElementById("incomeFact").value;
  var resultPlan = (incomeFact/incomePlan).toFixed(2);
  var kvp;
  if (resultPlan < 0.75) {
    kvp = 0.4;
  } else {
    if (resultPlan >= 1.1) {
      kvp = 1.3;
    } else {
      kvp = resultPlan;
    }
  }
  var textKvp = document.getElementById("kvp");
  textKvp.innerHTML = kvp;
}

var kvpButton = document.getElementById("kvpButton");
kvpButton.addEventListener('click', calcKVP);

function calcBonustarif(){
  var incomePrestigeGold = document.getElementById("incomePrestigeGold").value;
  var incomeStandartGold = document.getElementById("incomeStandartGold").value;
  var incomeEconom = document.getElementById("incomeEconom").value;
  var incomeGoodStart = document.getElementById("incomeGoodStart").value;
  var incomeNewPartner = document.getElementById("incomeNewPartner").value;
  var incomeZeroStart = document.getElementById("incomeZeroStart").value;
  var incomeTenZero = document.getElementById("incomeTenZero").value;
  var incomeStandartSilver = document.getElementById("incomeStandartSilver").value;
  var incomePrestigeTech = document.getElementById("incomePrestigeTech").value;
  var incomeStandartTech = document.getElementById("incomeStandartTech").value;
  var incomePersonal = document.getElementById("incomePersonal").value;
 
}
var calcBonusTarif = document.getElementById("calcBonusTarif");
calcBonusTarif.addEventListener('click', calcTP);

function calcTP() {
  var tpInputs = document.querySelector('.tpInput');
  var aaa = [];
  var inputValue;
    for (i = 0; i < tpInputs.length; i++) {
      aaa.push(tpInputs[i]);
     inputValue = aaa[i].value;
  
    }
}
var tpInputs = document.querySelectorAll('.tpInput');
var index;

for (var i = 0; i < tpInputs.length; i++) {
  tpInputs[i].addEventListener('change', calcTarif); 
}
var buttonIndex = document.getElementById("index");
var indexText = document.getElementById("indexText");


buttonIndex.addEventListener('click', findIndex);
function findIndex() {
  
  
}
function calcTarif() {
  var tpInputs = document.querySelectorAll('.tpInput');
  var bonusArr = [0.07,0.045,0.0275,0.04,0.04,0.0275,0.0275,0.04,0.1,0.085,0.001];
  var inputValue = this.value;
  tpInputs = Array.prototype.slice.call(tpInputs);
  tpInputs.forEach(function(elem){
    console.log(elem.value);
  });
  console.log(tpInputs);
  var inputAttr = this.getAttribute("data-tarif");
  var inputSibling = this.nextElementSibling;
  var myRes = tpInputs.indexOf(inputValue);
  
  var result = 0;
  for (var i = 0; i < bonusArr.length; i++) {
    result = (bonusArr[inputAttr]*inputValue).toFixed(2);
    inputSibling.innerHTML = result + " грн";
  }
  
}


var bonusArr = [];

/*--------------- Metal Bonus -------------------*/

var bonusMetal = document.querySelectorAll("#bonusMetal input");

for ( i = 0; i < bonusMetal.length; i++) {

  bonusMetal[i].addEventListener('change', calcBonusMetal); 
}
function calcBonusMetal() {
  var coff;
  var that = this;
  var attr = this.getAttribute('data-typeM');
  function calcResult(arg) {
   var res = (parseFloat((that.value*coff).toFixed(2)));
   return res;
 }
  switch (attr) {
    case '1':
      coff = 25;
      result = calcResult(that);
      bonusArr[0] = result;
      break;
    case '2':
      coff = 8;
      result = calcResult(that);
      bonusArr[1] = result;
      break;
     case '3':
      coff = 15;
      result = calcResult(that);
      bonusArr[2] = result;
      break;
    case '4':
      coff = 0.5;
      result = calcResult(that);
      bonusArr[3] = result;
      break;
    case '5':
      coff = 0.2;
      result = calcResult(that);
      bonusArr[4] = result;
      break;
  }
    var parentBonusMetalText = this.parentElement.nextSibling;
    var text = parentBonusMetalText.firstElementChild;
    text.innerHTML = result + " грн";
}



/*---------------  -------------------*/

var buttonAddRow = document.getElementById("addRow");
buttonAddRow.addEventListener('click', addRow);
function addRow() {
 
  var parentList = document.getElementById("techList");
  var childUl = document.querySelector('#techList li');
  var children = parentList.childNodes;
  var clone = childUl.cloneNode(true);
  var cloneChild = clone.firstElementChild;
 var cloneInput = cloneChild.firstElementChild;
  var cloneSibling = cloneChild.nextElementSibling;
  var cloneSpan = cloneSibling.firstElementChild;
  cloneSpan.innerHTML = "";
  cloneInput.value = "";

  parentList.appendChild(clone);
     var bonusTech = document.querySelectorAll("#techList input");
for ( i = 0; i < bonusTech.length; i++) {
  bonusTech[i].addEventListener('change', calcBonusTech);
}
  var buttonsRemoveRow = document.querySelectorAll('.removeRow');

buttonsRemoveRow = Array.prototype.slice.call(buttonsRemoveRow);
buttonsRemoveRow.forEach(function(elem) {
  elem.addEventListener('click',removeRow);

});
}
function removeRow(event){
  var parentLi = event.target.parentNode;
  var parentList = parentLi.parentNode;
 
 if (parentList.children.length>1){
   parentList.removeChild(parentLi);
 }
}
 

/*--------------- Tech Bonus -------------------*/

var bonusTech = document.querySelectorAll("#techList input");
for ( i = 0; i < bonusTech.length; i++) {
  bonusTech[i].addEventListener('change', calcBonusTech);
}
function calcBonusTech() {
  var priceNew = this.value;
  var techBonus;
   if (priceNew <=500){
      techBonus = 25;
      }
  else{
    if (priceNew >=501 && priceNew < 1001){
      techBonus = 50;
    }
    else {
      if (priceNew >=1001 && priceNew < 2001){
        techBonus = 75;
      }
      else {
        if (priceNew >=2001 && priceNew < 3001){
          techBonus = 100;
        }
        else{
          techBonus = 125;
        }
      }
    }
  }
  var result = techBonus.toFixed(2);
    var parentBonusTechText = this.parentElement.nextSibling;
    var text = parentBonusTechText.firstElementChild;
    text.innerHTML = result + " грн";
}  
  
/*--------------- Total Bonus ---------------*/ 

function calcTotal(){
  var spanTotalMetal = document.getElementById('spanTotalMetal');
  var res = 0;
  var techSpan = document.querySelectorAll('.bonusTech');
  var spanTotalTech = document.getElementById('spanTotalTech');
  var spanText;
  var totalTech = 0;
  for (var i = 0; i < bonusArr.length; i++) {
    res +=bonusArr[i];
  }
  for (var i = 0; i < techSpan.length; i++) {
    spanText = parseFloat(techSpan[i].innerHTML.replace(/\s/g,''));
    totalTech += spanText;
    
  }
  spanTotalMetal.innerHTML = res + "грн";
  spanTotalTech.innerHTML = totalTech + " грн";
  totalBonusText.innerHTML = res + totalTech + " грн";
}
var totalBonusButton = document.getElementById('totalBonus');
totalBonusButton.addEventListener('click', calcTotal);
var totalBonusText = document.getElementById('totalBonusText');
