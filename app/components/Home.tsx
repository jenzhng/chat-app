// Updates component
import dynamic from 'next/dynamic';
import { NavbarSimple } from './components/NavbarSimple';
import { AppShell, Navbar, MantineProvider, Button } from '@mantine/core';

export function Home() {
	
  return (
  <div className="home-page">
  
	<h1>Welcome to the ChatApp</h1>
	<h2>Implemented  Mantine UI, Ably, and Vercel</h2>
	<h2>Click on an option  the navbar to explore the app</h2>
	</div>
  );
}


