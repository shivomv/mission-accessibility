import React from 'react'
import CarouselManage from './homecompmanage/CarouselManage'
import MissionManage from './homecompmanage/MissionManage'
import AboutMange from './homecompmanage/AboutManage'
import SuccessStoriesManage from './homecompmanage/SuccessStoriesManage'
import CallToActionManagement from './homecompmanage/CallToActionManagement'

const ManageHome = () => {
  return (
    <div>
        <CarouselManage/>
        <MissionManage/>
        <AboutMange/>
        <CallToActionManagement/>
        <SuccessStoriesManage/>
    </div>
  )
}

export default ManageHome