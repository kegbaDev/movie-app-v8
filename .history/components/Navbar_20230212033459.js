import request from '@/utils/request'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        {Object.entries(requests).map(([key, {title, url}]) => (
          <h1 key={key}>{title}</h1>
        }
    </div>
  ):
}
