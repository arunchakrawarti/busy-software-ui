import ElectronicCredit from '@/components/pages/gst/gst-leaders/ElectronicCredit'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GST/VAT">
        <ElectronicCredit/>
      </MainLayout>
    </div>
  )
}

export default page
