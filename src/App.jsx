import { useState } from 'react';
import errorIcon from './images/icon-error.svg';

function Input({placeHolder, errorText, type, handleChange, name}) {
  return (
    <div className='relative mb-3'>
      <div className='peer' />
      <input name={name} onChange={handleChange} className='w-full border border-gray-300 focus:border-blue-700 focus:border-b-black peer-[.err]:border-red-400 peer-[.err]:font-bold peer-[.err]:text-red-400 caret-blue-700 placeholder:text-gray-500 placeholder:font-semibold placeholder:text-sm outline-none rounded py-3 px-6 duration-300' type={type} placeholder={placeHolder} />
      <span className='hidden peer-[.err]:inline absolute z-10 right-6 top-3'><img src={errorIcon} alt="..." /></span>
      <small className='hidden peer-[.err]:block text-right font-semibold text-red-400'><i>{errorText}</i></small>
    </div>
  )
}
function App() {
  const [formData, setFormData] = useState({firstname: '', lastname: '', email: '', password: ''});

  const handleChange = e => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();

    const isValidEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    
    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        const inp = document.querySelector(`input[name=${key}]`);
        inp.parentElement.firstElementChild.classList.remove('err');
      } else {
        const inp = document.querySelector(`input[name=${key}]`);
        inp.parentElement.firstElementChild.classList.add('err');
      }
    };

    if (isValidEmail.test(formData.email)) {
      const inp = document.querySelector(`input[name=email]`);
      inp.parentElement.firstElementChild.classList.remove('err');
    } else {
      const inp = document.querySelector(`input[name=email]`);
      inp.parentElement.firstElementChild.classList.add('err');
      inp.value = 'name@host.tld';
    }
  }

  return (
    <main className='font-Poppins w-full min-h-screen bg-red-400 bg-[url(./images/bg-intro-mobile.png)] sm:bg-[url(./images/bg-intro-desktop.png)] bg-cover'>
      <section className='grid place-content-center p-6 md:p-0 container min-h-screen bg- mx-auto'>
        <div className='md:flex justify-center items-center gap-10 md:mx-auto md:w-11/12 lg:w-4/5 max-w-7xl'>
          <div className='text-white md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
            <h1 className='text-4xl md:text-5xl font-bold'>Learn to code by watching others</h1>
            <p className='md:mt-8'>
              See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
              but understanding how developers think is invaluable. 
            </p>
          </div>
          <div className='md:w-1/2 grid gap-5'>
            <div className='shadow-small shadow-black/20 bg-blue-900/90 text-white rounded-md text-center py-3 px-12'>
              <b>Try it free 7 days</b> <span>then $20/mo. thereafter</span>
            </div>
            <form onSubmit={handleSubmit} className='shadow-small shadow-black/20 bg-white p-4 md:p-6 rounded-xl text-center'>
              <Input handleChange={handleChange} name='firstname' placeHolder={'First name'} errorText="First name cannot be empty" type={'text'} />
              <Input handleChange={handleChange} name='lastname' placeHolder={'Last name'} errorText="Last name cannot be empty" type={'text'} />
              <Input handleChange={handleChange} name='email' placeHolder={'Email Address'} errorText="looks like this is not an email" type={'text'} />
              <Input handleChange={handleChange} name='password' placeHolder={'Password'} errorText="Password cannot be empty" type={'password'} />
              <div className='mb-3'>
                <button type='submit' className='shadow-small shadow-green-600 bg-green-500/95 hover:bg-green-500/80 w-full text-white rounded-md text-center py-3 px-6 uppercase cursor-pointer duration-500'>Claim your free trial</button>
              </div>
              <p className='text-gray-300 font-light text-[12px]'>By clicking the button, you are agreeing to our <span className='text-red-500 font-semibold'>Terms and Services</span></p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
