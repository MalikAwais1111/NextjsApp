'use client'
import React, { Suspense } from 'react'
import Ticketslist from './ticketslist'
import Loader from '../components/loader'

const Tickets = () => {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p>Here are some of todos</p>
          </div>
        </nav>
        <Suspense fallback={<Loader/>}>
        <Ticketslist/>
        </Suspense>
    </main>
  )
}

export default Tickets