import Purchase from '@/components/pages/gst/gst-summaries/purchase-type-summaries/Purchase'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Purchase Type GST Summary">
        <Purchase/>
      </MainLayout>
    </div>
  )
}

export default page
