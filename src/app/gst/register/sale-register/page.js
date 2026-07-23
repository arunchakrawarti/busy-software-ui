import SaleRegister from '@/components/pages/gst/register/SaleRegister'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Sale Register(Bill-wise)">
        <SaleRegister/>
      </MainLayout>
    </div>
  )
}

export default page
