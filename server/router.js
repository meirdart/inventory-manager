const router = require('express').Router();

const INVENTORY_ITEMS = [
  { id: 1, name: 'Paper Towels', storageLocation: 'Kitchen Cupboard', targetQuantity: 12 },
  { id: 2, name: 'Napkins', storageLocation: 'Kitchen Cupboard', targetQuantity: 6 },
  { id: 3, name: 'Cholula', storageLocation: 'Kitchen Shelf', targetQuantity: 2 },
];

router.get('/items', function(req, res) {
  res.send(INVENTORY_ITEMS);
});

router.post('/items', function(req, res) {

});

router.put('/items', function(req, res) {

});

router.delete('/items', function(req, res) {

});

module.exports = router;
