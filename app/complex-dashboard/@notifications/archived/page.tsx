import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>ArchivedNotifications</div>
      <Link href='/complex-dashboard'>Normal messages</Link>
      </Card>
  )
}

export default ArchivedNotifications