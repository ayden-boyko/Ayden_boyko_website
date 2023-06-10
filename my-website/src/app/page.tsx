import type { Metadata } from 'next';
import StartBox from './components/StartBox';
import React, {useState} from 'react';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my Website',
};

export default function Home() {
  const [page, setPage] = useState("Home"); 
  return (
    <main>
      <div className="transition delay-200 flex min-h-screen flex-col items-center justify-between p-24">
        <StartBox></StartBox>
      </div>
    </main>
  )
}
