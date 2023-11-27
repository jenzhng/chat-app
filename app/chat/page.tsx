// `app/chat/page.tsx` is the UI for the `/chat` URL
"use client"
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MantineProvider } from '@mantine/core';

const Chat = dynamic(() => import('../components/Chat'), {
  ssr: false,
}) 
// import { Chat } from '.../components/Chat';

/* const NavbarSimple = React.lazy(() => import('../components/NavbarSimple')) */
import { NavbarSimple } from '../components/NavbarSimple';


export default function Home() {
  return (
	
    <div className="homepage">
	<main>
       
	<NavbarSimple/>
	 <Chat/>
      </main>
	</div>
  )
}

/* 		<NavbarSimple/>
 */
