
    const inputEntre = document.querySelector(".Entre");
    const inputE = document.querySelector(".e");
    const buttonSortear = document.querySelector(".Sortear");
    const buttonResultado = document.querySelector(".Resultado");
  

    buttonSortear.addEventListener("click", function() {
      const entre = parseInt(inputEntre.value);
      const e = parseInt(inputE.value);
  
      if (isNaN(entre) || isNaN(e)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
      }
  
      
      if (entre >= e) {
        alert("'Entre' deve ser menor que 'e'.");
        return;
      }
  
      const numeroSorteado = Math.floor(Math.random() * (e - entre + 1)) + entre;
  
      buttonResultado.textContent = numeroSorteado;
    });

  