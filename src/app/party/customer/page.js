import Customertab from '@/components/pages/party/customer/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Customers">
        <Customertab/>
      </MainLayout>
    </div>
  )
}

export default page
