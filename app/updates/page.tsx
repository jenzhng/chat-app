// `app/updates/page.tsx` is the UI for the `/updates` URL
"use client"
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MantineProvider } from '@mantine/core';

import { NavbarSimple } from '../components/NavbarSimple';
import { Updates } from '../components/Updates';


export default function UpdatePage() {
  return (
	
    <div className="homepage">
	<main>
       
	<NavbarSimple/>
	<Updates/>
      </main>
	</div>
  )
}