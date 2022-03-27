import React from 'react'
import usePortals from '../HOC/usePortals'
import LeftNavbar from './LeftNavbar'

const RespLeftNavBar = (props) => {
  return (
    <div className=' w-9/12 max-w-[320px] bg-white h-full relative z-50'>
      <LeftNavbar />
    </div>
  )
}

export default usePortals(RespLeftNavBar, )