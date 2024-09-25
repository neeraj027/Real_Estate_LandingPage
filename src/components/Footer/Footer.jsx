// // Footer.js
// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

// const Footer = () => {
//   return (
//     <footer className='bg-primary text-white py-8'>
//       <div className='max-w-6xl mx-auto text-center'>
//         {/* RERA Section */}
//         <p className='text-sm mb-4'>
//           Project RERA Registration No: UPRERAPRJ60941 | Promoter RERA
//           Registration No: UPRERAPRM4092 <br />
//           U.P. RERA WEBSITE ADDRESS - www.up-rerain
//         </p>

//         {/* Company Details */}
//         <div className='text-sm mb-6'>
//           <p>SHALIMAR CORP LTD.</p>
//           <p>
//             Titanium, Shalimar Corporate Park, Vibhuti Khand, Gomti Nagar,
//             Lucknow - 226010 <br />
//             Email:{' '}
//             <a href='mailto:sales@shalimar.org' className='hover:text-blue-500'>
//               sales@shalimar.org
//             </a>{' '}
//             Call: +91 522 4030444 • Website:{' '}
//             <a href='https://shalimarcorp.com' className='hover:text-blue-500'>
//               shalimarcorp.com
//             </a>
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className='flex justify-center space-x-6 mb-6'>
//           <a href='#' className='text-white hover:text-blue-500'>
//             <FaFacebookF size={24} />
//           </a>
//           <a href='#' className='text-white hover:text-blue-500'>
//             <FaXTwitter size={24} />
//           </a>
//           <a href='#' className='text-white hover:text-blue-500'>
//             <FaInstagram size={24} />
//           </a>
//           <a href='#' className='text-white hover:text-blue-500'>
//             <FaLinkedinIn size={24} />
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className='text-sm'>
//           <p>Copyright 2024 Sky Garden By Shalimar Crop Ltd.</p>
//           <p>All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-6 sm:py-8'>
      <div className='max-w-6xl mx-auto text-center px-4'>
        {/* RERA Section */}
        <p className='text-xs sm:text-sm mb-4'>
          Project RERA Registration No: UPRERAPRJ60941 | Promoter RERA
          Registration No: UPRERAPRM4092 <br />
          U.P. RERA WEBSITE ADDRESS - www.up-rerain
        </p>

        {/* Company Details */}
        <div className='text-xs sm:text-sm mb-6'>
          <p className='font-bold'>SHALIMAR CORP LTD.</p>
          <p>
            Titanium, Shalimar Corporate Park, Vibhuti Khand, Gomti Nagar,
            Lucknow - 226010 <br />
            Email:{' '}
            <a
              href='mailto:sales@shalimar.org'
              className='hover:text-blue-500 transition-colors duration-300'>
              sales@shalimar.org
            </a>{' '}
            | Call: +91 522 4030444 • Website:{' '}
            <a
              href='https://shalimarcorp.com'
              className='hover:text-blue-500 transition-colors duration-300'>
              shalimarcorp.com
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className='flex justify-center space-x-6 mb-6'>
          <a href='#' className='text-white hover:text-blue-500'>
            <FaFacebookF size={24} />
          </a>
          <a href='#' className='text-white hover:text-blue-500'>
            <FaXTwitter size={24} />
          </a>
          <a href='#' className='text-white hover:text-blue-500'>
            <FaInstagram size={24} />
          </a>
          <a href='#' className='text-white hover:text-blue-500'>
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className='text-xs sm:text-sm'>
          <p>&copy; 2024 Sky Garden By Shalimar Corp Ltd.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
