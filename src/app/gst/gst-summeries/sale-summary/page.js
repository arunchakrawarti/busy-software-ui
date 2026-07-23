import SaleSummary from '@/components/pages/gst/gst-summaries/sale-type-summarry/SaleSummary'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Sale type GST Summary">
        <SaleSummary/>
      </MainLayout>
    </div>
  )
}

export default page
