// import React, { useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const ContactPage = () => {
//   const [phone, setPhone] = useState('');

//   return (
//     <div
//       className='h-screen bg-cover bg-center flex items-center justify-center'
//       style={{
//         backgroundColor: 'black',
//         backgroundImage: "url('/BgImages/logo.png')", // replace with your actual image URL
//       }}>
//       <div className='w-full max-w-lg bg-white p-8 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-70'>
//         <h1 className='text-4xl font-semibold text-center mb-6'>
//           Get In Touch
//         </h1>

//         <form className='space-y-6'>
//           <div>
//             <input
//               type='text'
//               placeholder='Name'
//               className='w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
//             />
//           </div>
//           <div>
//             <input
//               type='email'
//               placeholder='Email'
//               className='w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
//             />
//           </div>
//           <div>
//             <input
//               type='tel'
//               placeholder='Phone Number'
//               className='w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
//             />
//           </div>
//           <div>
//             <button
//               type='submit'
//               className='w-full p-4 bg-black text-white rounded hover:bg-gray-800 transition-all'>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';

const ContactPage = forwardRef((props, ref) => {
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        containerRef.current.querySelector('input').focus(); // Focus on the first input in the form
      }
    },
  }));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('You will get a call shrotly!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message.');
        }
      );
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-cover bg-center flex items-center justify-center p-4'
      style={{
        backgroundColor: 'black',
        backgroundImage: "url('/BgImages/logo.png')", // replace with your actual image URL
      }}>
      <div className='w-full max-w-lg bg-white p-8 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-70'>
        <h1 className='text-3xl sm:text-4xl font-semibold text-center mb-6'>
          Get In Touch
        </h1>

        <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
          <div>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full p-3 sm:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              requiredtype='email'
              placeholder='Email'
              className='w-full p-3 sm:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <input
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone Number'
              required
              className='w-full p-3 sm:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <button
              type='submit'
              className='w-full p-3 sm:p-4 bg-black text-white rounded hover:bg-gray-800 transition-all'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ContactPage;
