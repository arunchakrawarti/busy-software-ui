import CashLeaders from '@/components/pages/gst/gst-leaders/CashLeader'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GST/VAT">
        <CashLeaders/>
      </MainLayout>
    </div>
  )
}

export default page
