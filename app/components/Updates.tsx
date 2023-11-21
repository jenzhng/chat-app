// Updates component
import dynamic from 'next/dynamic';
import { NavbarSimple } from './components/NavbarSimple';
import { AppShell, Navbar, MantineProvider, Button } from '@mantine/core';

export function Updates() {
	
  return (
  <div className="updatepage">
  
	<h1>Updates</h1>
	<h2>New functions implemented:</h2>
	 <ul>
	 <li>Real-time Chat Session</li>
	 <li>Working Navbar - Mantine UI</li>
	 </ul>
	<h2>Upcoming Updates:</h2>
	 <ul>
	 <li>Change Chatroom username</li>
	 <li>Implement Light/Dark Theme</li>
	 </ul>
	</div>
  );
}


