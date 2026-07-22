import GSTSummary from '@/components/pages/gst/gst-summaries/gst-summary/GSTSummary'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="">
        <GSTSummary/>
      </MainLayout>
    </div>
  )
}

export default page
