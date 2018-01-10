var playlist = new 
Object({zayn:'you and i'},{ph1:'hiphop'})

function updatePlaylist (object, key, value){
  Object.assign({},object, {[key]: value})
  return object
}

function removeFromPlaylist(object, key){
  delete object.key
  return object
}