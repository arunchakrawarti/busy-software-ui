import AccountRangeWithOpBal from '@/components/pages/payment-banking/utilities/AccountRangeWithOpBal'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Auto Adjust Bill References">
        <AccountRangeWithOpBal/>
      </MainLayout>
    </div>
  )
}

export default page
