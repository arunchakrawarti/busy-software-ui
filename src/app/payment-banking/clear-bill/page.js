import Clearbill from '@/components/pages/payment-banking/utilities/Clearbill'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Clear Bill References">
        <Clearbill/>
      </MainLayout>
    </div>
  )
}

export default page
