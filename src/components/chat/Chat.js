import React, { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

    const [open,setOpen]=useState(false)
    const [text,setText]=useState('')

    const handleEmoji=(e)=>{
        setText(prev=>prev+e.emoji)
        setOpen(false)
    }

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
            <img src='/avatar.png' alt=''/>
            <div className='texts'>
                <span>Jane Doe</span>
                <p>Lorem ipsum sic mundus est</p>
            </div>
        </div>
        <div className='icons'>
            <img src='/phone.png' alt=''/>
            <img src='/video.png' alt=''/>
            <img src='/info.png' alt=''/>
        </div>
      </div>
      <div className='center'>
        <div className='message own'>
            <div className='texts'>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className='message'>
            <img src='/avatar.png' alt=''/>
            <div className='texts'>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className='message own'>
            <div className='texts'>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className='message'>
            <img src='/avatar.png' alt=''/>
            <div className='texts'>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className='message'>
            <img src='/avatar.png' alt=''/>
            <div className='texts'>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className='message'>
            <img src='/avatar.png' alt=''/>
            <div className='texts'>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className='message own'>
            <div className='texts'>
                <img src='https://images.nightcafe.studio/jobs/PO9BaVxqMqce5cq3ju0D/PO9BaVxqMqce5cq3ju0D--1--jsjn1.jpg?tr=w-1600,c-at_max' alt=''/>
                <p>Lorem ipsum sic mundus dark series est</p>
                <span>1 min ago</span>
            </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='icons'>
            <img src='/img.png' alt=''/>
            <img src='/camera.png' alt=''/>
            <img src='/mic.png' alt=''/>
        </div>
        <input type='text' placeholder='Type a message' value={text} onChange={e=>setText(e.target.value)}/>
        <div className='emoji'>
            <img src='/emoji.png' alt='' onClick={()=>setOpen(!open)}/>
            <div className='picker'>
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
        </div>
        <button className='send'>Send</button>
      </div>
    </div>
  )
}

export default Chat
