import React from 'react'
import trial from '../../../assets/images/download.png';

type Props = {
    setEdit:any;

}

function UserProfile({setEdit }: Props) {
    return (
        <div>
            <div>
                <img src={trial} alt="" />
            </div>
            <p>
                Priyanshu
            </p>
            <p>
                mail.mail.com
            </p>
            <p>
                country : India
            </p>
            <button onClick={()=>{
                setEdit(true);
            }}>
                Edit Info
            </button>
        </div>
    )
}

export default UserProfile