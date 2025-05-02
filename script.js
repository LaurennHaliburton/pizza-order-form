document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pizzaForm");
    const table = document.querySelector("table");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  

      const name = document.getElementById("nameInput").value;
      const size = document.getElementById("sizeInput").value;
      const instructions = document.getElementById("instructionsInput").value;
  
  
      const toppings = [];
      const checkboxes = document.querySelectorAll('input[name="topping"]:checked');
      checkboxes.forEach(checkbox => toppings.push(checkbox.value));
      const toppingText = toppings.join(" & ");
  
    
      const newRow = document.createElement("tr");
  
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${size}</td>
        <td>${toppingText}</td>
        <td>${instructions}</td>
      `;
  

      table.appendChild(newRow);
      form.reset();
    });
  });
  