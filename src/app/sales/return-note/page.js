import Mainreturn from '@/components/pages/sales/return-note/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Sale Return">
        <Mainreturn/>
      </MainLayout>
    </div>
  )
}

export default page
