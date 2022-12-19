import Sidebar from "../components/Sidebar";
import React, { useState } from 'react'
import SidebarContainer from "../components/SidebarContainer";
import Basemap from "../components/sidebar-content/Basemap/Basemap";
import Map from "../components/Map";
import Layer from "../components/sidebar-content/Layer/Layer";


const Main = () => {
  const [open, setOpen] = useState(false)

  const [basemap, setBasemap] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");
  const [opacityBasemap, setOpacityBasemap] = useState(100);
  const [opacityBangunan, setOpacityBangunan] = useState(100);
  const [opacityBatas, setOpacityBatas] = useState(100);

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <SidebarContainer
        component={
          <Basemap
            setInputBasemap={(e) => setBasemap(e)}
            inputBasemap={basemap}
            open={open}
            jenis="Basemap"
          />
        }
      />
      <SidebarContainer
        component={
          <Layer
            open={open}
            jenis="Layer"
            setOpacityBasemap={setOpacityBasemap}
            setOpacityBangunan={setOpacityBangunan}
            setOpacityBatas={setOpacityBatas}
          />
        }
      />
      <Map
        setOpen={setOpen}
        basemap={basemap}
        opacityBasemap={opacityBasemap}
        opacityBangunan={opacityBangunan}
        opacityBatas={opacityBatas}
      />
    </div>
  )
}

export default Main