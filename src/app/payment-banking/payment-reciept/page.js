import PaymentreciptTab from '@/components/pages/payment-banking/payment-reciept/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Payments">
        <PaymentreciptTab/>
      </MainLayout>
    </div>
  )
}

export default page
