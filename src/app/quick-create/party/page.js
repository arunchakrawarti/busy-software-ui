import PartyForm from '@/components/pages/quick-create/party/PartyForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Create Customer">
        <PartyForm/>
      </MainLayout>
    </div>
  )
}

export default page
