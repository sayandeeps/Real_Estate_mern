import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import axios from 'axios';


const register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8800/api/auth/register', {
            name,
            email,
            password,
          });
          console.log(response.data);
          router.push('/login');
          // Handle the response data
        } catch (error) {
          setError(error.message);
        }
      };
  



  return (
    <section  className="bg-gray-50  :bg-gray-900">
  <div  className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#"  className="flex items-center mb-6 text-2xl font-semibold text-gray-900  :text-white">
          <img  className="w-40 h-20 mr-2" src={logo} alt="logo"/>
      </a>
      <div  className="w-full bg-white rounded-lg shadow  :border md:mt-0 sm:max-w-md xl:p-0  :bg-gray-800  :border-gray-700">
          <div  className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1  className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  :text-white">
                  Create an account
              </h1>
              <form  className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                  
                      <label for="name"  className="block mb-2 text-sm font-medium text-gray-900  :text-white">Name</label>
                      <input type="text" name="name"  placeholder="Your Name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  :bg-gray-700  :border-gray-600  :placeholder-gray-400  :text-white  :focus:ring-blue-500  :focus:border-blue-500" onChange={(e) => setName(e.target.value)} required=""/>
                  </div>
                  <div>
                      <label for="email"  className="block mb-2 text-sm font-medium text-gray-900  :text-white">Your email</label>
                      <input type="email" name="email" id="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  :bg-gray-700  :border-gray-600  :placeholder-gray-400  :text-white  :focus:ring-blue-500  :focus:border-blue-500" placeholder="name@company.com" onChange={(e) => setEmail(e.target.value)} required=""/>
                  </div>
                  <div>
                      <label for="password"  className="block mb-2 text-sm font-medium text-gray-900  :text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  :bg-gray-700  :border-gray-600  :placeholder-gray-400  :text-white  :focus:ring-blue-500  :focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} required=""/>
                  </div>
                  <button type="submit"  className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  :bg-primary-600  :hover:bg-primary-700  :focus:ring-primary-800">Create an account</button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <p  className="text-sm font-light text-gray-500  :text-gray-400">
                      Already have an account? <a href="/login"  className="font-medium text-primary-600 hover:underline  :text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default register