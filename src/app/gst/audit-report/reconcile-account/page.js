import ReconcileAccount from '@/components/pages/gst/audit-reports/ReconcileAcount'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Reconcile GST And Account(Sales)">
        <ReconcileAccount/>
      </MainLayout>
    </div>
  )
}

export default page
