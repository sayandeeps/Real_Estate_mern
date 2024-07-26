import React from 'react'
import logo from '../assets/images/logo.png';

const login = () => {
  return (
    <section class="bg-gray-50  :bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900  :text-white">
            <img class="w-40 h-20 mr-2" src={logo} alt="logo"/>
        </a>
        <div class="w-full bg-white rounded-lg shadow  :border md:mt-0 sm:max-w-md xl:p-0  :bg-gray-800  :border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  :text-white">
                    Login
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                   
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900  :text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  :bg-gray-700  :border-gray-600  :placeholder-gray-400  :text-white  :focus:ring-blue-500  :focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900  :text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  :bg-gray-700  :border-gray-600  :placeholder-gray-400  :text-white  :focus:ring-blue-500  :focus:border-blue-500" required=""/>
                    </div>
                    <button type="submit" class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  :bg-primary-600  :hover:bg-primary-700  :focus:ring-primary-800">Login</button>
                    <p class="text-sm font-light text-gray-500  :text-gray-400">
                        Do not have an account? <a href="/register" class="font-medium text-primary-600 hover:underline  :text-primary-500">Register here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default login