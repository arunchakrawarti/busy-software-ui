import UpdateBillingForm from '@/components/pages/sales/utilities/UpdateBillingForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Update Biling/Shipping">
        <UpdateBillingForm/>
      </MainLayout>
    </div>
  )
}

export default page
