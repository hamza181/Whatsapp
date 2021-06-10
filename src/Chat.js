import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticon, Mic } from '@material-ui/icons';

function Chat() {
	const [ seed, setSeed ] = useState('');

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="chat_headerInfo">
					<h3>qwef</h3>
					<p>qwef</p>
				</div>
				<div className="chat_headerRight">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat_body">
				<p className={`chat_message ${true && 'chat_receiver'}`}>
					<span className="chat_name">chatname</span>asdf
					<span className="chat_timestamp">3:52pm</span>
				</p>
			</div>
			<div className="chat_footer">
				<InsertEmoticon />
				<form>
					<input type="text" placeholder="Type a message" />
					<button>Send a message</button>
				</form>
				<Mic />
			</div>
		</div>
	);
}

export default Chat;
