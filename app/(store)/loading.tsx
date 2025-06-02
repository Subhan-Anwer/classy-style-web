import Loader from '@/components/ui/Loader'
import React from 'react'

const loading = () => {
  return (
    <main className='w-full h-[65vh] flex items-center justify-center' >
      <Loader />
    </main>
  )
}

export default loading
