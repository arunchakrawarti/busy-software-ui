import InvalidTaxRate from '@/components/pages/gst/audit-reports/InvalidTaxRate'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Invalid Tax Rate in Sales Vouchers">
        <InvalidTaxRate/>
      </MainLayout>
    </div>
  )
}

export default page
