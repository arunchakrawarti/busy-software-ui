import PartiesGSTIN from '@/components/pages/gst/audit-reports/PartiesGSTIN'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Parties With Invalid GSTIN">
        <PartiesGSTIN/>
      </MainLayout>
    </div>
  )
}

export default page
