// How does the page behave?
$.get('/items', function(inventoryItems) {
  var container = document.getElementById('inventory-container');

  inventoryItems.forEach(function(inventoryItem) {
    var newRow = document.createElement('div');
    newRow.className = 'inventory-row';

    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = inventoryItem.name;
    nameSpan.className = 'inventory-text';

    var storageLocationSpan = document.createElement('span');
    storageLocationSpan.innerHTML = inventoryItem.storageLocation;
    storageLocationSpan.className = 'inventory-text';

    var targetQuantitySpan = document.createElement('span');
    targetQuantitySpan.className = 'inventory-quantity';
    targetQuantitySpan.innerHTML = inventoryItem.targetQuantity;

    var currentQuantitySpan = document.createElement('span');
    currentQuantitySpan.className = 'inventory-quantity';

    var currentQuantityInput = document.createElement('input');
    currentQuantityInput.className = 'inventory-quantity-input';
    currentQuantitySpan.appendChild(currentQuantityInput);

    var quantityToOrderSpan = document.createElement('span');
    quantityToOrderSpan.innerHTML = '?';
    quantityToOrderSpan.className = 'inventory-quantity';

    newRow.appendChild(nameSpan);
    newRow.appendChild(storageLocationSpan);
    newRow.appendChild(targetQuantitySpan);
    newRow.appendChild(currentQuantitySpan);
    newRow.appendChild(quantityToOrderSpan);
    container.appendChild(newRow);
  });
});