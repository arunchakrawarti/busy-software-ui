import DeactivateMaster from '@/components/pages/party/utilities/DeactivateMaster'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="De-Activate Master">
        <DeactivateMaster/>
      </MainLayout>
    </div>
  )
}

export default page
