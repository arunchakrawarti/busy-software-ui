import QueryHSN from '@/components/pages/items/utilities/QueryHSN'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Query On HSN/SAC Code">
        <QueryHSN/>
      </MainLayout>
    </div>
  )
}

export default page
