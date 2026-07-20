import Billreference from '@/components/pages/party/utilities/Billreference'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Import Bill Reference Form Excel/Google sheet">
        <Billreference/>
      </MainLayout>
    </div>
  )
}

export default page
