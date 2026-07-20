import ItemTab from '@/components/pages/items/item-goodservice/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Item Master Listing">
        <ItemTab/>
      </MainLayout>
    </div>
  )
}

export default page
