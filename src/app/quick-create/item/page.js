import ItemForm from '@/components/pages/quick-create/item/ItemForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <ItemForm/>
      </MainLayout>
    </div>
  )
}

export default page
