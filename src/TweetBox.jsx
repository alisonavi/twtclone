import React from 'react';
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';
function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://media.discordapp.net/attachments/741802409709535262/1162867622128406589/13777a218437825d08af55a5d4b02fde.jpg?ex=653d7fde&is=652b0ade&hm=eed8b1a1bdbdca425417258c17062ba1b91ec702a1dba0a04c4e5771ec53bbf6&=&width=581&height=581' />
          <input placeholder="What's hapenning?" type='text' />
        </div>
        <input className="tweetBox_imageInput" placeholder='Enter image URL' type='text' />
        <Button className='tweetBox_tweetButton'> Tweet </Button>
      </form>
    </div>
  )
}

export default TweetBox;