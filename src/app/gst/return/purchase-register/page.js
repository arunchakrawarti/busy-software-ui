import Purchase from '@/components/pages/gst/return/purchase-register/Purchase'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Purchase Rister (For Offline Reconcillation)">
        <Purchase/>
      </MainLayout>
    </div>
  )
}

export default page
