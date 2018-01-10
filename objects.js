var playlist = new 
Object({zayn:'you and i'},{ph1:'hiphop'})

function updatePlaylist (playlist, artistName, songTitle){
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return
}