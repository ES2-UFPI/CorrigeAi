import React from 'react'
import { Navigate } from 'react-router-dom'

export function RedirectLogin() {
  console.log('Redirect')
  return (
    <div>
      <Navigate to='/login' />
    </div>
  )
}
