import React from 'react'
import loginSvg from "../../assets/login.svg"
import Image from 'next/image'

export const metadata={
  title:"Add Task : Work Manager"
}
const AddTask = () => {
  return (
    <div className='grid grid-cols-12 justify-center'>
    <div className='col-span-6 col-start-4 p-5'> 
      <div className='my-2 flex justify-center'>
        <Image className='w-6/12' src={loginSvg}/>
      </div>
        <h1 className='text-3xl text-center'>Add your task here</h1>
        <form action="#!">
          {/* task title */}
          <div className='mt-4'>
            <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title</label>
            <input type="text" className='w-full p-2.5 rounded-lg focus:ring-gray-300 border border-gray-500' id='task_title' />
          </div>
          {/* task content */}
          <div className='mt-4'>
            <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content</label>
            <textarea className='w-full p-2.5 rounded-lg focus:ring-gray-300 border border-gray-500' id='task_content' rows={5}/>
          </div>

          {/* task status */}
          <div className='mt-4'>
            <label htmlFor="task_status" className='block text-sm font-medium mb-2'>Status</label>
            <select id='task_status' className='w-full p-2.5 rounded-lg focus:ring-gray-300 border border-gray-500'>
            <option value="none" selected disabled>--Select Status--</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* button actions */}
          <div className='mt-4 flex justify-center text-white'>
            <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800 '>Add Todo</button>
            <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3 '>Clear</button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default AddTask