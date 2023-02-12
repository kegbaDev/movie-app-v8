import request from '@/utils/request'
import React from 'react'

export default function 
() {
  return (
    <div>
        {Object.entries(request).map(([key,{title}]))}
    </div>
  )
}
