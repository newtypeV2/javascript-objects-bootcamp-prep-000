var playlist = {
  Kamikazee:"Narda"
}

function updatePlaylist(ObjectA,ArtistA,TitleA){
  ObjectA[ArtistA]=TitleA
  return ObjectA
}

function removeFromPlaylist(ObjectA,ArtistA){
  delete ObjectA[ArtistA]
  return ObjectA
}