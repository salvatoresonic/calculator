function display(val) {
  document.getElementById("result").value += val;
  return val;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function solve() {
  let x = document.getElementById("result").value;
  let newX = x.replace("x", "*");
  let y = eval(newX);

  document.getElementById("result").value = y;
  return y;
}
