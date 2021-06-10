import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Chat.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {

    const [ seed, setSeed ] = useState('');

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                <div className="chat_headerInfo">
                    <h3>qwef</h3>
                    <p>qwef</p>
                </div>
                <div className="chat_headerRight"><IconButton>
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton></div>
            </div>
            <div className='chat_body'></div>
            <div className='chat_footer'></div>
        </div>
    )
}

export default Chat
