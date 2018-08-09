var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 return array[0] = element;
}

addElementToEndOfArray = function(array, element) {
 return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
 return array[3] = element;
}

function accessElementInArray(array, element) {
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift();
 return array()
}

function removeElementFromBeginningOfArray(array) {
return  array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop();
 return array
}

function removeElementFromEndOfArray(array) {
 return array.slice(0, array.length -1);
}
