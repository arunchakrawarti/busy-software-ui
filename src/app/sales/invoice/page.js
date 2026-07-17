import InvoiceTab from '@/components/pages/sales/invoice/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Invoice">
        <InvoiceTab/>
      </MainLayout>
    </div>
  )
}

export default page
