// import React from 'react';

// const Parallax = () => {
//   return (
//     <div className='relative h-screen overflow-hidden'>
//       {/* Background Image */}
//       <div className='absolute inset-0'>
//         <div
//           className='bg-fixed bg-center bg-cover h-full'
//           style={{
//             backgroundImage: 'url(  "/BgImages/building2.jpg"  )',
//           }}></div>
//       </div>

//       {/* Overlay content */}
//       <div className='relative flex items-center justify-center h-full text-white'>
//         <div className='bg-black bg-opacity-25 w-full h-full rounded-lg text-center'></div>
//       </div>
//     </div>
//   );
// };

// export default Parallax;

import React from 'react';

const Parallax = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <div
          className='bg-fixed bg-center bg-cover h-full'
          style={{
            backgroundImage: 'url("/BgImages/building2.jpg")',
            backgroundSize: 'cover', // Ensures the image covers the entire area
            backgroundPosition: 'center', // Centers the image
            filter: 'brightness(0.6)', // Optional: adds a dark filter for better text visibility
          }}></div>
      </div>

      {/* Overlay content */}
      <div className='relative flex items-center justify-center h-full text-white'>
        <div className='bg-black bg-opacity-25 w-full h-full rounded-lg text-center flex items-center justify-center p-4'></div>
      </div>
    </div>
  );
};

export default Parallax;
