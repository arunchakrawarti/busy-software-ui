import PurchaseRegister from '@/components/pages/gst/register/PurchaseRegister'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Purchase Register (Bill-wise)">
        <PurchaseRegister/>
      </MainLayout>
    </div>
  )
}

export default page
