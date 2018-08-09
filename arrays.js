var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 return array[0] = element;
}

addElementToEndOfArray = function(array, element) {
 return array.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
 return array[3] = element;
}

function accessElementInArray(array, element) {
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  return array();
}

function removeElementFromBeginningOfArray(array, element) {
  array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
}

function removeElementFromEndOfArray(array, element) {
  array.slice(0, array.length -1);
}
