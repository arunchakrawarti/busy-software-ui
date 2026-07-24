import GstExpensewise from '@/components/pages/gst/audit-reports/gst-expense-audit/GstExpensewise'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="GST Nature Expense wise">
        <GstExpensewise/>
      </MainLayout>
    </div>
  )
}

export default page
