import SupplierTab from '@/components/pages/party/suppliers/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <SupplierTab/>
      </MainLayout>
    </div>
  )
}

export default page
