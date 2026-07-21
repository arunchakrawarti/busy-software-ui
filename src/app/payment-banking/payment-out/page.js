import PaymentoutTab from '@/components/pages/payment-banking/payment-out/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Payments">
        <PaymentoutTab/>
      </MainLayout>
    </div>
  )
}

export default page
