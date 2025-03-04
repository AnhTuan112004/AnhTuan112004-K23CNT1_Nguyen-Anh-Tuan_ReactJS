import React from 'react'

export default function natRenderList() {
    const natList = ["Anh Tuan", "ReactJS","Fit-NTU"];

    const natElement = natList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                natList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {natElement}
    </div>
  )
}