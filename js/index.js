let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let valueOute  = document.getElementById("value");
let checkBox = document.getElementById("checkbox");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  valueOute.innerHTML = `$ ${Number.parseFloat(this.value * 0.36).toFixed(2)}`;
}

checkBox.onchange = function() {
    if (onchange == true) {
        valueOute.innerHTML = `$ ${Number.parseFloat(slider.value * 4.32).toFixed(2)}`;
    }
    
  }