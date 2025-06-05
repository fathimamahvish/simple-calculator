// Wait for DOM to load before getting element
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');

  // Attach functions to window so they are global and callable from inline onclick
  window.appendValue = function(value) {
    display.value += value;
  }

  window.clearDisplay = function() {
    display.value = '';
  }

  window.calculate = function() {
    try {
      const result = eval(display.value);
      display.value = result;
    } catch {
      display.value = 'Error';
    }
  }

  // Optional: keyboard support
  document.addEventListener('keydown', function(e) {
    const allowedKeys = '0123456789+-*/.=';
    
    if (allowedKeys.includes(e.key)) {
      if (e.key === '=') {
        calculate();
      } else {
        appendValue(e.key);
      }
    } else if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else if (e.key === 'Escape') {
      clearDisplay();
    }
  });
});
