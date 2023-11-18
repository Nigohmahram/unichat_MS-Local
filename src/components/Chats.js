import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		await auth.signOut();

		navigate('/');
	};

	return (
		<div className='chats-page'>
			<div className='nav-bar'>
				<div className='logo-tab'>Unichat</div>
				<div onClick={handleLogout} className='logout-tab'>
					Logout
				</div>
			</div>

			<ChatEngine height='calc(100vh - 66px)' projectId='a08d432c-e89a-4f38-a5fb-66d1d9ab420d' userName='.' userSecret='.' />
		</div>
	);
};
export default Chats;
