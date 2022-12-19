import React, { useRef, useEffect, useState } from 'react'

function Slider({ setOpacity, label }) {
    const input = useRef()

    useEffect(() => {
        input.current.value = 100
    }, [])

    return (<div className='flex flex-col cursor-pointer'>
        <p className='ml-5 text-midnight-blue'>{label}</p>
        <input ref={input} type="range" onChange={(e) => setOpacity(e.target.value)} />
    </div>
    )
}

export default Slider