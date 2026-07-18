import TransportReport from '@/components/pages/purchase/utilities/TransportReport'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Update Transport Details">
        <TransportReport/>
      </MainLayout>
    </div>
  )
}

export default page
