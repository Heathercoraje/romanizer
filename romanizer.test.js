var test = require('tape');

var romanizer = require('./romanizer.js');



test('check tape is working', function(t) {
  t.equal(1, 1, 'one should equal one');
  t.end();

});

test('Romanizer Test 1', function(t) {
  t.equal(romanizer(1), 'I', 'One should return I');
  t.end();

});

test('Romanizer Test 2', function(t) {
  t.equal(romanizer(2), 'II', 'Two should return II');
  t.end();

});

test('Romanizer Test 3', function(t) {
  t.equal(romanizer(3), 'III', 'three should return III');
  t.end();

});

test('Romanizer Test 4', function(t) {
  t.equal(romanizer(4), 'IV', 'four should return IV');
  t.end();

});

test('Romanizer Test 5', function(t) {
  t.equal(romanizer(5), 'V', 'five should return V');
  t.end();

});

test('Romanizer Test 6', function(t) {
  t.equal(romanizer(6), 'VI', 'six should return VI');
  t.end();

});
test('Romanizer Test 7', function(t) {
  t.equal(romanizer(7), 'VII', '7 should return VII');
  t.end();

});
test('Romanizer Test 8', function(t) {
  t.equal(romanizer(8), 'VIII', '8 should return VIII');
  t.end();

});
test('Romanizer Test 9', function(t) {
  t.equal(romanizer(9), 'IX', '9 should return IX');
  t.end();

});
test('Romanizer Test 10', function(t) {
  t.equal(romanizer(10), 'X', '10 should return X');
  t.end();

});
test('Romanizer Test 11', function(t) {
  t.equal(romanizer(11), 'XI', '11 should return XI');
  t.end();

});
test('Romanizer Test 12', function(t) {
  t.equal(romanizer(12), 'XII', '12 should return XII');
  t.end();

});
test('Romanizer Test 13', function(t) {
  t.equal(romanizer(13), 'XIII', '13 should return XIII');
  t.end();

});
test('Romanizer Test 14', function(t) {
  t.equal(romanizer(14), 'XIV', '14 should return XIV');
  t.end();

});
test('Romanizer Test 15', function(t) {
  t.equal(romanizer(15), 'XV', '15 should return XV');
  t.end();

});

test('Romanizer Test 16', function(t) {
  t.equal(romanizer(16), 'XVI', '16 should return XVI');
  t.end();

});
test('Romanizer Test 17', function(t) {
  t.equal(romanizer(17), 'XVII', '17 should return XVII');
  t.end();

});
test('Romanizer Test 18', function(t) {
  t.equal(romanizer(18), 'XVIII', '18 should return VXIII');
  t.end();

});
test('Romanizer Test 19', function(t) {
  t.equal(romanizer(19), 'XIX', '19 should return XIX');
  t.end();

});
test('Romanizer Test 20', function(t) {
  t.equal(romanizer(20), 'XX', '20 should return XX');
  t.end();

});
test('Romanizer Test 40', function(t) {
  t.equal(romanizer(40), 'XL', '40 should return XL');
  t.end();

});

test('Romanizer Test 90', function(t) {
  t.equal(romanizer(90), 'XC', '90 should return XC');
  t.end();

});

test('Romanizer does not take a string', function(t) {
  t.equal(romanizer('ersfd'), 'Sorry, I can only convert numbers : (', 'ersfd should return an error');
  t.end();
})

test('Romanizer converter', function(t) {
  t.equal(romanizer(100), 'C', '100 should return C');
  t.equal(romanizer(890), 'DCCCXC', '890 should return DCCCXC');
  t.equal(romanizer(900), 'CM', '900 should return CM');
  t.equal(romanizer(1800), 'MDCCC', '1800 should return MDCCC');
  t.equal(romanizer(31), 'XXXI', '31 should return XXXI');
  t.equal(romanizer(62), 'LXII', '62 should return LXII');
  t.equal(romanizer(500), 'D', '500 should return D');
  t.equal(romanizer(400), 'CD', '400 should return CD');
  t.equal(romanizer(88), 'LXXXVIII', '88 should return LXXXVIII');
  t.equal(romanizer(4999), 'MMMMCMXCIX', '4999 should return MMMMCMXCIX');
  t.equal(romanizer(5000), 'Please sumbmit a value less than 5000', '5000 should output an error');
  t.equal(romanizer(0), 'Sorry, the Romans didn/t use numbers lower than 1', '0 should output an error');
  t.equal(romanizer(-5), 'Sorry, the Romans didn/t use numbers lower than 1', '-5 should output an error');
  t.end();

});
