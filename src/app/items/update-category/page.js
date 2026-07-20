import UpdateCategory from '@/components/pages/items/utilities/UpdateCategory'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Bulk HSN/Tax Category">
        <UpdateCategory/>
      </MainLayout>
    </div>
  )
}

export default page
