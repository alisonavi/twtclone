import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='wid'>

      </div>
    </div>
  )
}

export default Widgets;