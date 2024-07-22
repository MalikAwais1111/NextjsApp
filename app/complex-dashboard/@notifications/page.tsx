import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

const Notifications = () => {
  return (
    <Card>
      <div>Notifications</div>
      <Link href='/complex-dashboard/archived'>Archived messages</Link>
      </Card>
  )
}

export default Notifications