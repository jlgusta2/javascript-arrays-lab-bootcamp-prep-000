const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
  
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}

function appendKitten(name){
  var newKitty = [...kittens]
  newKitty.push(name)
  return newKitty;
}

function prependKitten(name){
  var newKitty = [...kittens]
  newKitty.unshift(name)
  return newKitty;
}

function removeLastKitten(){
  var newKitty = [...kittens]
  newKitty.pop()
  return newKitty;
}

function removeFirstKitten(){
  var newKitty = [...kittens]
  newKitty.shift()
  return newKitty;
  
}

