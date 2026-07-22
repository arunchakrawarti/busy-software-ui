import Gstr3bTab from '@/components/pages/gst/return/gstr-3b/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Form GSTR-3B">
        <Gstr3bTab/>
      </MainLayout>
    </div>
  )
}

export default page
