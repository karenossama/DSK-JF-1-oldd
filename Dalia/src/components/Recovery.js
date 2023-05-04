import React from 'react'
import styles from '../styles/Username.css'


export default function Recovery() {
  return (
    <div className="container mx-auto">
      <div className='flex justify-center items-center h-screen'>
        <div className='glass'>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className='pt-4 text-xl text-center text-gray-500'>Enter OTP to recover password</span>
          </div>
          <form className='pt-10'>
          
            <div className="textbox flex flex-col items-center gap-5" >
              <div className="input text-center">
              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 digit OTP to send to your email address
              </span>
              </div>
              <input className='textbox' type="text" placeholder='OTP' />
              <button className='btn' type='submit'>Recover</button>
              <span id='errors'></span>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Can't get OTP? <button className='text-red-500'>Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}



// why using <Link to=""> instead of <a href=""> ? 
// --> when <a> is clicked the browser refreshes everytime and this is not how the browser works; as we want it to redirect directly to the pther page, so we use <link>