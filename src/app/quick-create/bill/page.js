import Mainbill from '@/components/pages/quick-create/bill/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Create Bills">
        <Mainbill/>
      </MainLayout>
    </div>
  )
}

export default page
