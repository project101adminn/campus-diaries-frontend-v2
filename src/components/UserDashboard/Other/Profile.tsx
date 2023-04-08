import React,{useState} from 'react'
import EditProfile from './EditProfile';
import UserProfile from './UserProfile';

type Props = {}

function Profile({}: Props) {
  const [Edit, setEdit] = useState(false);
  
  return (
    <div className="bg-gray-200 pt-2 font-mono h-[100%] overflow-y-scroll">
      {Edit ? (
        <EditProfile setEdit={setEdit}/>
      ) : (
        <UserProfile setEdit={setEdit}/>
      )}
    </div>
  )
}

export default Profile





  