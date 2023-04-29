import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  login: any;
};

const Left = ({ login }: Props) => {
  const history = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', college: '', password: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let name, value;
  const handleInputs = (el: any) => {
    name = el.target.name;
    value = el.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e: any) => {
    e.preventDefault();
    const { name, email, phone, college, password } = user;
    const res = await fetch(`${process.env.REACT_APP_API_CALL}/admin/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, college, password }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Registration Successfully');
      console.log('Registration Successfully');
      history('/login');
    }
  };

  const loginUser = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_CALL}/admin/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert('Invalid Credential');
      console.log('Invalid Credential');
    } else {
      window.alert('Signin Successfully');
      console.log('Signin Successfully');
      history('/');
    }
  };

  return (
    <section className="md:flex-[0.5] flex-1">
      <form method="POST" className="flex flex-col h-[100%] justify-center">
        <h2 className="text-4xl font-bold font-sans  mx-auto w-[90%]">{login}</h2>
        <p className=" mx-auto my-1 mb-4 w-[90%]">How do i get started ? here</p>

        {login == 'Login' ? (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
              id="email"
              className="bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              id="password"
              className="bg-purple-100 rounded-md mx-auto m-2 p-2 w-[90%]"
            />
          </>
        ) : (
          <>
            <input type="text" placeholder="NAME" name="name" id="name" value={user.name} onChange={handleInputs} className="bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]" />
            <input type="email" placeholder="Email" name="email" id="email" value={user.email} onChange={handleInputs} className="bg-purple-100 rounded-md mx-auto m-2 p-2 w-[90%]" />
            <input type="number" placeholder="Phone" name="phone" id="phone" value={user.phone} onChange={handleInputs} className="bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]" />

            <input type="text" placeholder="Collage" name="college" id="college" value={user.college} onChange={handleInputs} className="bg-purple-100 rounded-md mx-auto m-4 mb-2 p-2 w-[90%]" />
            <input type="password" placeholder="Password" name="password" id="password" value={user.password} onChange={handleInputs} className="bg-purple-100 rounded-md mx-auto m-2 p-2 w-[90%]" />
          </>
        )}

        {login == 'SIGN UP' ? (
          <></>
        ) : (
          <div className="flex justify-between mx-auto w-[86%] my-2 mb-6 font-semibold">
            <Link to="/signup">Sign UP ?</Link>
            <p>Forgot password?</p>
          </div>
        )}

        <button type="submit" className="bg-purple-500 text-white mx-auto font-semibold rounded-lg px-6 p-2 text-xl" onClick={login == 'SIGN UP' ? postData : loginUser}>
          {login}
        </button>

        {login == 'Login' ? (
          <></>
        ) : (
          <p className="text-center m-4">
            Already a user.{' '}
            <Link to="/login" className="text-lg font-semibold">
              SignIn ?{' '}
            </Link>
          </p>
        )}
      </form>
    </section>
  );
};

export default Left;
