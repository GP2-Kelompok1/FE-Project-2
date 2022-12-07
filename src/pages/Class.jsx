import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Class = () => {
  const [row,setRows] = useState([])

  const getRows = () =>{
    axios.get(`https://virtserver.swaggerhub.com/FEBRYANZAINAL/Immersive-Dashboard-OpenAPI/1.0.0/classes`)
    .then((res)=>{
      console.log(res.data.data)
    setRows(res.data.data)
    })
  }

  // console.log("ini data dari api",row)
  useEffect(()=>getRows(),[])
  return (
    <>
    <div className='grid justify-end'>
    <div className="my-4 mx-16">
  <div className=' dropdown'>
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
  </div>
  
  <button className="mx-2 bg-slate-200 btn btn-ghost btn-box">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  <div className='left-2 dropdown rounded-box'>
  <button className='btn btn-primary'>Filter</button>
 
  </div>
  </div>
  </div>

    <div className='my-10 mx-16 rounded-box   min-h-screen'>
      <div className="overflow-x-auto">
  <table className='table table-zebra w-full' >

    <thead>
      <tr>
        <th>NO</th>
        <th>NAMA</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
    {row.map((item)=>{
      return(   
    <tbody className="">

      <tr className='hover'>
        <th>{item.id}</th>
        <td>{item.class_name}</td>
        <td>icon edit</td>
        <td>icon delete</td>
      </tr>

    </tbody>
)})}
  </table>
</div>
<div className="btn-group flex  place-items-center justify-center">
  <button className="btn bg-white text-black ">Prev</button>
  <p className='mx-10'>1 2 3 4 5 </p>
  <button className="btn bg-white text-black">Next</button>
</div>
    </div>

    </>
  )
}

export default Class