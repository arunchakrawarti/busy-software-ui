import Gstr from '@/components/pages/gst/return/gstr-6/Gstr'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="ITC Recieved for Distribution-B2B">
        <Gstr/>
      </MainLayout>
    </div>
  )
}

export default page
