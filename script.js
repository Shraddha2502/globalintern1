function appendToScreen(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }
  
  function clearScreen() {
    document.getElementById('result').value = '';
  }
  
  function backspace
  