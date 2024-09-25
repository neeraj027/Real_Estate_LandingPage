// import React from 'react';
// import bannerImage from '/BgImages/building1.jpg';
// import OverlapBanner from '../Overlap Banner/OverlapBanner';
// const Banner = () => {
//   return (
//     <div className='w-full h-[500px]'>
//       <img
//         src={bannerImage}
//         alt='Banner image'
//         className='absolute top-0 -z-20 object-cover object-top '
//       />
//       <div className='absolute top-0 w-full h-full -z-20 bg-black bg-opacity-50'></div>
//       {/* <OverlapBanner /> */}
//     </div>
//   );
// };

// export default Banner;

import React from 'react';
import bannerImage from '/BgImages/building1.jpg';
import OverlapBanner from '../Overlap Banner/OverlapBanner';

const Banner = () => {
  return (
    <div className=' w-full h-[40vh] md:h-[50vh] lg:h-[60vh]'>
      <img
        src={bannerImage}
        alt='Banner image'
        className='absolute top-0 object-cover object-top w-full h-full -z-20'
      />
      <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 -z-10'></div>
      {/* Uncomment to use the OverlapBanner component */}
      {/* <OverlapBanner /> */}
    </div>
  );
};

export default Banner;
