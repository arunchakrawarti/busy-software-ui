import TransportReport from '@/components/pages/sales/utilities/TransportReport'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout titlt="Update Trasport Details">
        <TransportReport/>
      </MainLayout>
    </div>
  )
}

export default page
