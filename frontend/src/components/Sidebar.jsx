import React from 'react'

function Sidebar() {
  return (
    <div className='fixed top-0 bottom-0 mt-[70px] w-56 border-gray-400 border-r-2 text-white flex flex-col gap-3 px-2 py-4'>
      <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">Home</div>
      <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">Liked Videos</div>
      <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">History</div>
      <div className="border-2 border-gray-400 py-[5px] px-4 hover:bg-purple-600 hover:text-black">Subscribers</div>
    </div>
  )
}

export default Sidebar