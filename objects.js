var playlist = {
  'Slowdive': "Alison"
}

function updatePlaylist(playlist, artistName, songTitles){
  playlist[artistName] = songTitles
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
