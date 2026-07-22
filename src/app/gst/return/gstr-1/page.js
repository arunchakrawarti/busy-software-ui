import GstrTab from '@/components/pages/gst/return/gstr-1/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GSTR 1">
        <GstrTab/>
      </MainLayout>
    </div>
  )
}

export default page
