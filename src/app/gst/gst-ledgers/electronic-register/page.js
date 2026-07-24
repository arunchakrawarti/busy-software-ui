import ElectronicRegister from '@/components/pages/gst/gst-leaders/ElectronicRegister'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GST/VAT">
        <ElectronicRegister/>
      </MainLayout>
    </div>
  )
}

export default page
