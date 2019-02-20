//action creator
export const selectSong = SONG_SELECTED => {
  //return action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
//named export
