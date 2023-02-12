import requests from '@/utils/request'
import React from 'react'

export default function Navbar() {
  return (
    <div className = "flex justify-center bg-gray-200 select">
        {Object.entries(requests).map(([key, {title, url }]) => (
          <h2 className="m-6 cursor-pointer hover:text-white active:text-color-red" key={key}>{title}</h2>
        ))}
        
    </div>
  );
}
