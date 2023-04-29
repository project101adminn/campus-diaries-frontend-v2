import React from 'react'
import ProductImage from './ProductImage'
import UploadImage from './UploadImage'

type Props = {}

function AddProduct({ }: Props) {
    return (
        <main className='md:flex-row flex flex-col md:h-[92vh] p-8 bg-purple-400 '>
            <div className='lefto bg-white p-3 space-y-2 flex-[0.5] md:rounded-tl-md md:rounded-bl-2xl'>
                <p className='text-2xl font-semibold' > Add Products</p>
                <br />
                <p className=''>Add Images</p>
                <div className='border-zinc-700 h-60 rounded-lg flex justify-center items-center border-2 border-dashed'>
                    box
                </div>
                <ProductImage />
                <ProductImage />
                <ProductImage />
                <UploadImage/>
            </div>
            <div className='lefto flex-[0.5] p-3 bg-white md:rounded-tr-md md:rounded-br-2xl'>
                <form className='p-3 space-y-4 flex flex-col'>
                    <div>
                        <p>
                            Product Name
                        </p>
                        <input type="text" name='productName' id='productName' className='w-full bg-purple-50 rounded-lg text-lg p-2' />
                    </div>
                    <div>
                        <p>
                            Store
                        </p>
                        <input type="text" name='store' id='store' className='w-full bg-purple-50 rounded-lg text-lg p-2' />
                    </div>
                    <div>
                        <p>
                            Price
                        </p>
                        <input type="text" name='price' id='price' className='w-full bg-purple-50 rounded-lg text-lg p-2' />
                    </div>
                    <div>
                        <p>
                            Desciption
                        </p>
                        <textarea name="description" id="description" rows={7} className='w-full rounded-lg bg-purple-50 text-lg p-2 resize-none' >

                        </textarea>

                    </div>

                    <div>
                        <p>Tags</p>
                        <div className='w-full p-2 border-2 rounded-lg space-y-2 flex flex-col'>
                            <div className='flex space-x-2'>
                                <button className='border p-1 rounded-md'>
                                    Cloth
                                
                                </button>
                                <button className='border p-1 rounded-md'>
                                    Cloth
                                
                                </button>
                                <button className='border p-1 rounded-md'>
                                    Cloth
                                
                                </button>
                                <button className='border p-1 rounded-md'>
                                    Cloth
                                
                                </button>
                                <button className='border p-1 rounded-md'>
                                    Cloth
                                
                                </button>
                            </div>
                            <div className='flex space-x-2'>
                                <button className='border p-1 rounded-md'>
                                    Cloth
                                
                                </button>
                                
                                <button className='border p-1 bg-purple-200 rounded-md'>
                                    Add +
                                
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-end m-4'>
                        <button type='submit' className='bg-purple-400 p-2 rounded-md'>
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddProduct