const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const changeButton = document.querySelector('button');

console.log(changeButton);
let selectAll = true;
function changeAll(e){
  if (selectAll) {
    checkboxes.forEach(checkbox => checkbox.checked = true)
    selectAll = !selectAll;
  }else{
    selectAll = !selectAll;
    checkboxes.forEach(checkbox => checkbox.checked = false)
  }
}

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if (e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log(inBetween);
      }
      if(inBetween){
        checkbox.checked = true;
        console.log(checkbox);
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
changeButton.addEventListener('click', changeAll);
