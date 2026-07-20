import CreateMultipleExcel from '@/components/pages/items/utilities/CreateMultipleExcel'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Import Item Master Form Excel/Google Sheet">
        <CreateMultipleExcel/>
      </MainLayout>
    </div>
  )
}

export default page
