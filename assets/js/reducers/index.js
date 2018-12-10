import { combineReducers } from 'redux';

const songsReducer = () => {
return [
    { title: 'Drip', duration: '4:56' },
    { title: 'In My Feelings', duration: '2:36' },
    { title: 'This Is America', duration: '3:15' },
    { title: 'Lost Ones', duration: '5:45' }
]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
