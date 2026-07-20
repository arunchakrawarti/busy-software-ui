import CreateMultipleExcel from '@/components/pages/party/utilities/CreateMultipleExcel'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Import Account Master From Excel/Google Sheet">
        <CreateMultipleExcel/>
      </MainLayout>
    </div>
  )
}

export default page
