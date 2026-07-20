import TaxCategory from '@/components/pages/items/utilities/TaxCategory'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Create Tax Category">
        <TaxCategory/>
      </MainLayout>
    </div>
  )
}

export default page
