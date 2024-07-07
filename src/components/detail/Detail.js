import React from 'react'
import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src='/avatar.png' alt=''/>
        <h2>Jack Sparrow</h2>
        <p>Lorem ipsim salt is tasti</p>
      </div>
      <div className='info'>
        <div className='option'>
            <div className='title'>
                <span>Chat settings</span>
                <img src='/arrowUp.png' alt=''/>
            </div>
        </div>
        <div className='option'>
            <div className='title'>
                <span>Privacy</span>
                <img src='/arrowUp.png' alt=''/>
            </div>
        </div>
        <div className='option'>
            <div className='title'>
                <span>Shared photos</span>
                <img src='/arrowDown.png' alt=''/>
            </div>
            <div className='photos'>
                <div className='photoItem'>
                    <div className='photoDetail'>
                        <img src='https://images.nightcafe.studio/jobs/PO9BaVxqMqce5cq3ju0D/PO9BaVxqMqce5cq3ju0D--1--jsjn1.jpg?tr=w-1600,c-at_max' alt=''/>
                        <span>selfie_2024.png</span>
                    </div>
                    <img src='/download.png' alt='' className='icon'/>
                </div>
            </div>
            <div className='photos'>
                <div className='photoItem'>
                    <div className='photoDetail'>
                        <img src='https://images.nightcafe.studio/jobs/PO9BaVxqMqce5cq3ju0D/PO9BaVxqMqce5cq3ju0D--1--jsjn1.jpg?tr=w-1600,c-at_max' alt=''/>
                        <span>selfie_2024.png</span>
                    </div>
                    <img src='/download.png' alt='' className='icon'/>
                </div>
            </div>
            <div className='photos'>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img src='https://images.nightcafe.studio/jobs/PO9BaVxqMqce5cq3ju0D/PO9BaVxqMqce5cq3ju0D--1--jsjn1.jpg?tr=w-1600,c-at_max' alt=''/>
                            <span>selfie_2024.png</span>
                        </div>
                        <img src='/download.png' alt='' className='icon'/>
                    </div>
            </div>
            <div className='photos'>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img src='https://images.nightcafe.studio/jobs/PO9BaVxqMqce5cq3ju0D/PO9BaVxqMqce5cq3ju0D--1--jsjn1.jpg?tr=w-1600,c-at_max' alt=''/>
                            <span>selfie_2024.png</span>
                        </div>
                        <img src='/download.png' alt='' className='icon'/>
                    </div>
            </div>
            <div className='photos'>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img src='https://images.nightcafe.studio/jobs/PO9BaVxqMqce5cq3ju0D/PO9BaVxqMqce5cq3ju0D--1--jsjn1.jpg?tr=w-1600,c-at_max' alt=''/>
                            <span>selfie_2024.png</span>
                        </div>
                        <img src='/download.png' alt='' className='icon'/>
                    </div>
            </div>
        </div>
        <div className='option'>
            <div className='title'>
                <span>Shared files</span>
                <img src='/arrowUp.png' alt=''/>
            </div>
        </div>
        <button>Block user</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Detail
