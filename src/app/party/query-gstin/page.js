import QueryGSTIN from '@/components/pages/party/utilities/QueryGSTIN'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout titlt="Query on GSTIN">
        <QueryGSTIN/>
      </MainLayout>
    </div>
  )
}

export default page
