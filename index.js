function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
  
    if (isNaN(amount) || isNaN(rate)) {
      alert('Por favor, digite valores numéricos válidos.');
      return;
    }
  
    const result = (amount * rate) / 100;
    document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)}`;
  }  