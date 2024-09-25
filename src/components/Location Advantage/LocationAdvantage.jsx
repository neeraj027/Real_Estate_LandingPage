// import React from 'react';
// import Accordion from '../Accordian/Accordian';

// const LocationAdvantage = () => {
//   return (
//     <div className=' h-max overflow-hidden'>
//       {/* Background Image */}
//       <div className=' inset-0'>
//         <div
//           className='bg-fixed bg-center bg-cover h-full'
//           style={{
//             backgroundImage: 'url(  "/BgImages/bg2.jpg"  )',
//           }}>
//           <div className='flex w-full justify-around items-center py-10'>
//             <div className='w-1/2 flex justify-center'>
//               <img className='w-96' src='/map/map.webp' alt='' />
//             </div>
//             <div className='bg-white w-1/2 rounded-l-3xl overflow-hidden'>
//               <Accordion />{' '}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationAdvantage;

import React from 'react';
import Accordion from '../Accordian/Accordian';

const LocationAdvantage = () => {
  return (
    <div className='h-max overflow-hidden'>
      {/* Background Image */}
      <div className='inset-0'>
        <div
          className='bg-fixed bg-center bg-cover h-full'
          style={{
            backgroundImage: 'url("/BgImages/bg2.jpg")',
          }}>
          <div className='flex flex-col gap-5 md:flex-row justify-around items-center py-10'>
            <div className='w-full md:w-1/2 flex justify-center'>
              <img
                className='w-full max-w-md'
                src='/map/map.webp'
                alt='Location Map'
              />
            </div>
            <div className='bg-white w-full md:w-1/2 lg:rounded-l-3xl lg:rounded-r-none rounded-3xl overflow-hidden shadow-lg'>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAdvantage;
