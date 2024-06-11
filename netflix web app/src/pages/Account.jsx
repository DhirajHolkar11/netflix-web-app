import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    
        
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />

<div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
 <div className='absolute top-[20%] p-4 md:p-8'>

<h1 className='text-3xl md:text-5xl font-bold'>My Show</h1>

 </div>




    </div>


    <SavedShows/>

  
    </>
  )
}

export default Account