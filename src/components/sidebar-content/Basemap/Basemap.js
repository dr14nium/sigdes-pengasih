import React from 'react'
import RBI from '../../../assets/images/Basemap/RBI.jpg'
import GoogleStreet from '../../../assets/images/Basemap/GoogleStreet.jpg'
import GoogleSatellite from '../../../assets/images/Basemap/GoogleSatellite.jpg'

const jenisBasemap = [
  {
    url: "https://geoservices.big.go.id/rbi/rest/services/BASEMAP/Rupabumi_Indonesia/MapServer/tile/{z}/{y}/{x}",
    nama: "Rupa Bumi Indonesia",
    gambar: RBI,
  },
  {
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    nama: "Google Streets",
    gambar: GoogleStreet,
  },
  {
    url: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
    nama: "Google Satellite",
    gambar: GoogleSatellite,
  },
];


function Basemap({ setInputBasemap, inputBasemap, open, jenis }) {

  return (
    <div className='w-35 px-0 py-0 duration-500 '
      style={open === jenis ? { marginLeft: "50px" } : { marginLeft: "-300px" }}
    >
      {jenisBasemap.map((basemap) => {
        return (
          <div key={basemap.url} className='relative m-0 p-0 cursor-pointer' onClick={() => setInputBasemap(basemap.url)}>
            <div className={inputBasemap === basemap.url ? 'absolute  items-center w-full h-full border-4 border-sky-500' : 'absolute text-sm  items-center w-full h-full'}>
              <p className={inputBasemap === basemap.url ? 'text-center text-midnight-blue bg-white' : 'text-center text-white bg-midnight-blue'}>{basemap.nama}</p>
            </div>
            <img src={basemap.gambar} alt="" className='w-full h-32 object-cover' />
          </div>
        )
      })}
    </div >
  )
}

export default Basemap