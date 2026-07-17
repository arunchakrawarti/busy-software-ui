import MainInvoice from '@/components/pages/quick-create/invoice/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Create Invoice">
        <MainInvoice/>
      </MainLayout>
    </div>
  )
}

export default page
