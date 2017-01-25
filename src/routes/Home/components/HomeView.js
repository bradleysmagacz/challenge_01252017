import React from 'react'
import { browserHistory } from 'react-router'
import './HomeView.scss'

export const HomeView = () => {
  browserHistory.push('/nasa/home')
  return (
    <div>
      <h4>Welcome! Click the Image Of The Day link above to begin</h4>
    </div>
  )
}

export default HomeView
