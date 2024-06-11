import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
const {user, logOut} = UserAuth();
const navigate = useNavigate();
// console.log(user)

const handleLogout = async () => {
  try{
    await logOut();
    navigate('/');
  }
  catch(error){
    console.log(error);
  }
};


  return (
    


<div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
<Link to='/'>

<img className='w-[140px] ml-[10px]' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflixlogo" />
</Link>




{/* 

<div>

<Link to='/login'>

    <button className='text-white pr-4'>Sign In</button>

</Link>


<Link to='/signup'>

    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
</Link>

</div>

 */}


{user?.email ? (

  
  <div>

<Link to='/account'>

    <button className='text-white pr-4'>Account</button>

</Link>


<Link to='/signup'>

    <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
</Link>

</div>

)

:
(

  <div>

<Link to='/login'>

    <button className='text-white pr-4'>Sign In</button>

</Link>


<Link to='/signup'>

    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
</Link>

</div>


)
}








</div>


  
  )
}

export default Navbar;