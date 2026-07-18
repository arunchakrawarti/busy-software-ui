import CreateGSTIN from '@/components/pages/party/utilities/CreateGSTIN'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Multiple Account Creation By GSTIN">
        <CreateGSTIN/>
      </MainLayout>
    </div>
  )
}

export default page
