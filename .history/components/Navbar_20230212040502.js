import requests from '@/utils/request'
import React from 'react'

export default function Navbar() {
  return (
    <div className = "flex justify-center bg-gray">
        {Object.entries(requests).map(([key, {title, url }]) => (
          <h2 className="m-6 cursor-pointer hover:text" key={key}>{title}</h2>
        ))}
        
    </div>
  );
}
