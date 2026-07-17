import Mainreciept from '@/components/pages/quick-create/receipt/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Create Reciept">
        <Mainreciept/>
      </MainLayout>
    </div>
  )
}

export default page
