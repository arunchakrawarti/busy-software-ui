import DeactivateMaster from '@/components/pages/items/utilities/DeactivateMaster'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="De-Activate Masters">
        <DeactivateMaster/>
      </MainLayout>
    </div>
  )
}

export default page
