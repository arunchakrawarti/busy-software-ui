import ReturnTab from '@/components/pages/gst/return/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="IFF (Invoice Furnishing Facility)">
        <ReturnTab/>
      </MainLayout>
    </div>
  )
}

export default page
