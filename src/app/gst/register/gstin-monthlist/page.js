import GstinMonthList from '@/components/pages/gst/register/GstinMonthList'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <GstinMonthList/>
      </MainLayout>
    </div>
  )
}

export default page
