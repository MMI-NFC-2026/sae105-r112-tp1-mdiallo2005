// 1. changer la couleur du texte
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.Style.color = "red";
// 2. Réagir à un click
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
enrougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red";
});
// 3. Trouver les H2
const collH2 =document.querySelectorAll("H2");
collH2.forEach((elm)=>{
    evt.target.style.color = "red";
});
