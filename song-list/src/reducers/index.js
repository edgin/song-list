const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration:'4:05'},
    {title: 'No Scrubs', duration:'4:05'},
    {title: 'No Scrubs', duration:'4:05'},
    {title: 'No Scrubs', duration:'4:05'},
  ]
}

const selectedSongReducer = (selectedSong = null, action ) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }
  return selectedSong
}
