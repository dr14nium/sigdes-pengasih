import React from 'react'
import IconSidebar from './IconSidebar'
import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ icon, judul, open, setOpen }) {

  return (
    <div className='absolute left-0 h-screen  bg-midnight-blue' style={{ zIndex: 1000 }}>
      <Link to="/">
        <IconSidebar
          icon={<Ai.AiOutlineHome className='w-5 h-5' />}
          judul="Home"
          open={open}
          setOpen={setOpen}
        />
      </Link>
      <IconSidebar
        icon={<Bs.BsLayers className='w-5 h-5' />}
        judul="Layer"
        open={open}
        setOpen={setOpen}
      />
      <IconSidebar
        icon={<Bs.BsGlobe2 className='w-5 h-5' />}
        judul="Basemap"
        open={open}
        setOpen={setOpen}
      />
    </div >
  )
}

export default Sidebar