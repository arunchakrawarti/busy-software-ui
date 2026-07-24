import ChangeItem from '@/components/pages/gst/audit-reports/ChangeItem'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Chnage in Tax Rate in Item">
        <ChangeItem/>
      </MainLayout>
    </div>
  )
}

export default page
