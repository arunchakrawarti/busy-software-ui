import UpdatePurchasebillno from '@/components/pages/purchase/utilities/UpdatePurchasebillno'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Update Purchase Bill No./Date">
        <UpdatePurchasebillno/>
      </MainLayout>
    </div>
  )
}

export default page
