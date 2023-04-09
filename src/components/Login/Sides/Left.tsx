import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    login:any,

}

function Left({login,}: Props) {
  return (
    <section className='md:flex-[0.5] flex-1'>
                            <form className='flex flex-col h-[100%] justify-center'>
                                <h2 className='text-4xl font-bold font-sans  mx-auto w-[90%]'>{login}</h2>
                                <p className=' mx-auto my-1 mb-4 w-[90%]'>How do i get started ? here</p>

                                {login =='Login' ? 
                                <>
                                <input type="text" placeholder='ID' name='id' id='id' className='bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]' />
                                <input type="text" placeholder='Password' name='password' id='password' className='bg-purple-100 rounded-md mx-auto m-2 p-2 w-[90%]' />
                                </>
                            :
                            <>
                            <input type="text" placeholder='NAME' name='name' id='name' className='bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]' />
                                <input type="text" placeholder='Email' name='email' id='email' className='bg-purple-100 rounded-md mx-auto m-2 p-2 w-[90%]' />
                                <input type="text" placeholder='Phone' name='phone' id='phone' className='bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]' />

                                <input type="text" placeholder='Collage' name='collage' id='collage' className='bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]' />
                                <input type="text" placeholder='Password' name='password' id='password' className='bg-purple-100 rounded-md mx-auto m-2 p-2 w-[90%]' />
                            </>
                            }

                                

                                {login=='SIGN UP' ? <>

                                </>:
                                
                                <div className='flex justify-between mx-auto w-[86%] my-2 mb-6 font-semibold'>
                                    <Link to='/signup'>
                                        Sign UP ?
                                    </Link>
                                <p >
                                    Forgot password?
                                </p>
                                </div>

                                }
                                


                                <button type='submit' className='bg-purple-500 text-white mx-auto font-semibold rounded-lg px-6 p-2 text-xl'>
                                    {login}
                                </button>

                                {login=='Login' ? <></>
                                
                                :
                                
                                <p className='text-center m-4'>
                                    Already a user. <Link to='/login' className='text-lg font-semibold' >SignIn ? </Link>
                                </p>

                                }
                            </form>
                        </section>
  )
}

export default Left;