import BankStatementImport from '@/components/pages/payment-banking/smart-bankreconcilation/Bankreconcilation'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Import Bank Statement">
        <BankStatementImport/>
      </MainLayout>
    </div>
  )
}

export default page
