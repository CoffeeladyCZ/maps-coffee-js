// Coffeehouse Constructor
class CoffeehouseForm {
  constructor(name, adress, time) {
    this.name = name;
    this.adress = adress;
    this.time = time;
  }
    
}

// UI Constructor
class UI {
  // Add coffeehouse to list
  addCoffeehouseToList(coffeehouseItem) {
    const list = document.getElementById('new-coffeehouse-item');

    // Insert tr element
    const row = document.createElement('tr');
    // Insert column
    row.innerHTML = `
    <td>${coffeehouseItem.name}</td>
    <td>${coffeehouseItem.adress}</td>
    <td>${coffeehouseItem.time}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add className
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.tipCoffeehouse');
    // Get form
    const form = document.querySelector('#coffee-form');
    // Insert alert
    container.insertBefore(div, form); // vloží nový prvek před existující
    
    // Set timeout
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  
  deleteCoffeehouse(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearField() {
    document.getElementById('name-coffeehouse').value = '';
    document.getElementById('adress-coffeehouse').value = '';
    document.getElementById('time-coffeehouse').value = '';
  }


}

// 1. Event Listener to coffeehouse
document.getElementById('coffee-form').addEventListener('submit', 
  function(e) {
    // Get forms value
    const name = document.getElementById('name-coffeehouse').value,
          adress = document.getElementById('adress-coffeehouse').value,
          time = document.getElementById('time-coffeehouse').value


    // Instiante coffeehouseItem
    const coffeehouseItem = new CoffeehouseForm(name, adress, time); // vytvoří nový objekt

    // Instantiate UI
    const ui = new UI();

    
    // Validate
    if (name === '' || adress === '' || time === '') {
      ui.showAlert('Zadej údaje', 'error');
    } else {
      // Add Coffeehouse to list
      ui.addCoffeehouseToList(coffeehouseItem);

      ui.showAlert('Kavárna byla přidána', 'succes');

      ui.clearField();
    }

    e.preventDefault();
  })

  // 2. Event Listener for delete
  document.getElementById('new-coffeehouse-item').addEventListener('click',
    function(e) {
      //Instantiate UI
      const ui = new UI();

      ui.deleteCoffeehouse(e.target);


      // Show alert
      ui.showAlert('Kavárna byla smazána', 'succes');

      e.preventDefault();
    })