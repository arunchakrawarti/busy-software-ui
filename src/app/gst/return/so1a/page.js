import MainSoA from '@/components/pages/gst/return/so1a/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GST Refund Statement-1A (Purchase)">
        <MainSoA/>
      </MainLayout>
    </div>
  )
}

export default page
