import TaxAudit from '@/components/pages/gst/audit-reports/TaxAudit'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Tax Audit Report Clause-44">
        <TaxAudit/>
      </MainLayout>
    </div>
  )
}

export default page
