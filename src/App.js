import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
	return (
		<div className="app">
			<div className="app_body">
				<Sidebar />
        <Chat></Chat>
			</div>
		</div>
	);
}

export default App;
