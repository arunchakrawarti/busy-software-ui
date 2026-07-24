import ExpenseGst from '@/components/pages/gst/audit-reports/gst-expense-audit/ExpenseGst'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Expense GST Nature wise">
        <ExpenseGst/>
      </MainLayout>
    </div>
  )
}

export default page
