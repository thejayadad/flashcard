import Link from 'next/link'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

const GroupPage = () => {
  return (
    <div className='w-full h-full bg-[#3098C6]'>
      <div className="flex flex-col h-full mx-auto max-w-screen-2xl w-full">
        <nav className='w-full bg-white py-6 px-4'>
          <div className='flex items-center justify-between'>
            <div>
              <Link 
              className='flex items-center space-x-2 rounded-lg bg-amber-400 p-2 text-white'
              href={'/'}>
              <FiArrowLeft className='h-5 w-5 text-neutral-600' />
              </Link>
            </div>
            <div>Title</div>
            <div>New FlashCard</div>
          </div>  
        </nav>
        <div className='h-full px-4'>
          GroupPage
        </div>
      </div>
    </div>
  )
}

export default GroupPage