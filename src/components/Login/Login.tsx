import React from 'react'

import { Link } from 'react-router-dom';
import bho from "../../assets/Login/bho.jpg";
import bgo from "../../assets/Login/bgo.jpg";
import kio from "../../assets/Login/kio.jpg";
import Left from './Sides/Left';
import Right from './Sides/Right';

type Props = {}

function Login({ }: Props) {
    return (
        <div

            // style={{ backgroundImage: `url(${bgo})` }}

            className='flex w-full h-full bg-cover bg-center bg-purple-400' >
            <div className='w-[100vw] h-[92vh] overflow-y-hidden overflow-x-hidden'>
                <div className='flex w-[100vw] h-[100vh] justify-center items-center'>
                    <div className='flex w-[80vw] h-[80vh] -mt-12 bg-white rounded-lg'>
                        <Left login="Login"/>
                        <Right/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login