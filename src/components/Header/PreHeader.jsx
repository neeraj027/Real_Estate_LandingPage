// import { motion } from 'framer-motion';
// import React from 'react';

// const PreHeader = () => {
//   return (
//     <div className='overflow-hidden bg-secondary py-1'>
//       <div className='flex justify-around text-light '>
//         <h6>Shalimar Wispering Woods</h6>
//         <h6>Project Rera No : UPRERAPRJ3807551</h6>
//         <h6>
//           Rera Website :
//           <a
//             href='www.up-rera.in'
//             className='underline decoration-1 text-blue-700'>
//             {' '}
//             www.up-rera.in
//           </a>
//         </h6>
//         <h6>Authorised Channel Partner</h6>
//         <h6>Landmark Realtors</h6>
//         <h6>Rera No. UPRERAAGT1183</h6>
//       </div>
//     </div>
//   );
// };

// export default PreHeader;

import { motion } from 'framer-motion';
import React from 'react';

const PreHeader = () => {
  return (
    <div className='overflow-hidden bg-secondary py-1'>
      <div className='flex md:justify-around items-end md:items-center flex-col md:flex-row text-light text-sm md:text-base'>
        <h6 className='flex-1 text-center md:text-left'>
          Shalimar Wispering Woods
        </h6>
        <h6 className='flex-1 text-center md:text-left'>
          Project Rera No : UPRERAPRJ3807551
        </h6>
        <h6 className='flex-1 text-center md:text-left'>
          Rera Website :{' '}
          <a
            href='https://www.up-rera.in'
            target='_blank'
            className='underline decoration-1 text-blue-700'>
            www.up-rera.in
          </a>
        </h6>
        <h6 className='flex-1 text-center md:text-left'>
          Authorised Channel Partner
        </h6>
        <h6 className='flex-1 text-center md:text-left'>Landmark Realtors</h6>
        <h6 className='flex-1 text-center md:text-left'>
          Rera No. UPRERAAGT1183
        </h6>
      </div>
    </div>
  );
};

export default PreHeader;
