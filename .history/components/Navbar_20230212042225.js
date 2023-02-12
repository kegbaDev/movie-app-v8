import requests from '@/utils/request'
import React from 'react'
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className = "flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text">
        {Object.entries(requests).map(([key, {title, url }]) => (
          <h2 onClick={ () => (router.push(`?genre=${key}`)) } className="m-6 cursor-pointer text-white hover:text-white active:text-red-400" key={key}>{title}</h2>
        ))}
        
    </div>
  );
}
