import React from 'react'
import usePortals from '../HOC/usePortals'
import LeftNavbar from './LeftNavbar'

const RespLeftNavBar = () => {
  return (
    <div className=' w-9/12 max-w-[320px] bg-white h-full'>
      <LeftNavbar />
    </div>
  )
}

export default usePortals(RespLeftNavBar, )