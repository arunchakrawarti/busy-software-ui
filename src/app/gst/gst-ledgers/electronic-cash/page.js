import ElectronicCash from '@/components/pages/gst/gst-leaders/ElectronicCash'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GST/VAT">
        <ElectronicCash/>
      </MainLayout>
    </div>
  )
}

export default page
