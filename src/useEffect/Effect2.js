import React, {useState, useEffect} from 'react'

export default function Effect2() {
    const [Width, setWidth] = useState(window.screen.width);

    const actualWidth = () => {
        setWidth(window.innerWidth)
        console.log(window.innerWidth)
    }
    useEffect(() => {
        console.log("add")

          window.addEventListener('resize', actualWidth)
        return () => {
            console.log("remove")
            window.removeEventListener('resize', actualWidth)
        }
    })
    return (
        <div style={{width: '100%' , border: 'solid', height:'100px'}}>
          <h2>Use Effect with Cleanup & Without Dependency</h2>
          <h2>{`Width ${Width}`}</h2>
        </div>
    )
}
