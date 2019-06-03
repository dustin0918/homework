const list = []

function addToList(thing, list) {
  list.push(thing)
}

function removeFromList(index, list) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  list.splice(index, 1)
}
