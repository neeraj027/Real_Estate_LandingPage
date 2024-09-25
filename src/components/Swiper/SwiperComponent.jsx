// import React from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CardSlider = ({ images }) => {
//   const settings = {
//     dots: false,
//     autoplay: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     arrows: true,
//   };

//   return (
//     <div className='w-full max-w-6xl mx-auto'>
//       <Slider {...settings}>
//         {images.map((item, index) => (
//           <div key={index} className='relative p-2'>
//             <motion.div
//               className='rounded-lg overflow-hidden shadow-lg'
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}>
//               <img
//                 src={item.img}
//                 alt={`Slide ${index}`}
//                 className='w-full h-96 object-cover'
//               />
//               <div className='mx-2 mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg'>
//                 <motion.h3
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className='text-lg text-center text-light font-semibold font-GowunBatang'>
//                   {item.title}
//                 </motion.h3>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// // Custom Next Arrow Component
// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute top-1/2 right-5 transform -translate-y-1/2 bg-primary rounded-full shadow-md p-4 text-3xl cursor-pointer z-20 hover:bg-lightGreen transition`}
//       style={{ ...style }}
//       onClick={onClick}>
//       &gt;
//     </div>
//   );
// };

// // Custom Previous Arrow Component
// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute top-1/2 left-5 transform -translate-y-1/2 bg-primary rounded-full shadow-md p-4 text-3xl cursor-pointer z-20 hover:bg-lightGreen transition`}
//       style={{ ...style }}
//       onClick={onClick}>
//       &lt;
//     </div>
//   );
// };

// export default CardSlider;

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = ({ images }) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default for mobile
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className='relative p-2'>
            <motion.div
              className='rounded-lg overflow-hidden shadow-lg'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <img
                src={item.img}
                alt={`Slide ${index}`}
                className='w-full h-72 md:h-80 lg:h-96 object-cover' // Adjusted height for different screen sizes
              />
              <div className='mx-2 mb-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg'>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='text-sm md:text-lg text-center text-light font-semibold font-GowunBatang'>
                  {item.title}
                </motion.h3>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-5 transform -translate-y-1/2 bg-primary rounded-full shadow-md p-4 text-3xl cursor-pointer z-20 hover:bg-lightGreen transition`}
      style={{ ...style }}
      onClick={onClick}>
      &gt;
    </div>
  );
};

// Custom Previous Arrow Component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-5 transform -translate-y-1/2 bg-primary rounded-full shadow-md p-4 text-3xl cursor-pointer z-20 hover:bg-lightGreen transition`}
      style={{ ...style }}
      onClick={onClick}>
      &lt;
    </div>
  );
};

export default CardSlider;
