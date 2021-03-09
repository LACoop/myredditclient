import React from 'react';
import Posts from './containers/posts';
import Subreddits from './subreddits/subreddits';
import './App.css';


function App() {
  return (
    <div>
      <Subreddits />
      <Posts />
    </div>
  );
}

export default App;
