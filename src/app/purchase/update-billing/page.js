import UpdateBillingForm from '@/components/pages/purchase/utilities/UpdateBillingForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Update Billing/shipping">
        <UpdateBillingForm/>
      </MainLayout>
    </div>
  )
}

export default page
