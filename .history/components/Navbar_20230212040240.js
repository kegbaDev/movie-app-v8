import requests from '@/utils/request'
import React from 'react'

export default function Navbar() {
  return (
    <div classeName = "flex justify-center bg-gray">
        {Object.entries(requests).map(([key, {title, url }]) => (
          <h2 classeName="" key={key}>{title}</h2>
        ))}
        
    </div>
  );
}
