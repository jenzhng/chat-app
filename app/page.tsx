// `app/page.tsx` is the UI for the `/` URL
import dynamic from 'next/dynamic';
import { NavbarSimple } from './components/NavbarSimple';
import { AppShell, Navbar, MantineProvider, Button } from '@mantine/core';
// import { Chat } from './components/Chat';
const Chat = dynamic(() => import('./components/Chat'), {
  ssr: false,
})
import { Home } from './components/Home';

export default function App() {
	
  return (
  <div className="homepage">
	<main>
       
	<NavbarSimple/>
	<Home/>
      </main>
	</div>
  );
}


