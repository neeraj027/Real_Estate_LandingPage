// import React, { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { useAnimation, motion } from 'framer-motion';
// import SwiperComponent from '../Swiper/SwiperComponent';

// const GroundFloor = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2, // Trigger when 20% of the element is in view
//     triggerOnce: true, // Animate only once
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, x: 0 }); // Move to the original position
//     } else {
//       controls.start({ opacity: 0, x: 100 }); // Start from the right
//     }
//   }, [controls, inView]);

//   const images = [
//     {
//       img: '/Amenities/gym.webp',
//       title: 'Gym',
//     },
//     {
//       img: '/Amenities/pool.webp',
//       title: 'Swimming Pool',
//     },
//     {
//       img: '/Amenities/court.jpeg',
//       title: 'Basketball Court',
//     },
//     {
//       img: '/Amenities/waitingArea.jpg',
//       title: 'Waithing Area',
//     },
//     {
//       img: '/Amenities/park.webp',
//       title: 'Park',
//     },
//   ];

//   return (
//     <section className='bg-white py-10 px-4'>
//       <div className='container mx-auto'>
//         <div ref={ref} className='overflow-x-hidden font-GowunBatang'>
//           <motion.h2
//             className='text-6xl font-bold text-center mb-2'
//             initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
//             animate={controls}
//             transition={{ duration: 0.8, ease: 'easeOut' }}>
//             Ground Floor Amenities
//           </motion.h2>
//           <motion.p
//             className='text-2xl text-gray-600 text-center mb-8'
//             initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
//             animate={controls}
//             transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
//             {' '}
//             {/* Optional delay for the paragraph */}
//             Exceptional Experiences Begin Here, From The Ground Up.
//           </motion.p>
//         </div>
//         <div className='h-96'>
//           <SwiperComponent images={images} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GroundFloor;

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import SwiperComponent from '../Swiper/SwiperComponent';

const GroundFloor = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the element is in view
    triggerOnce: true, // Animate only once
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 }); // Move to the original position
    } else {
      controls.start({ opacity: 0, x: 100 }); // Start from the right
    }
  }, [controls, inView]);

  const images = [
    {
      img: '/Amenities/gym.webp',
      title: 'Gym',
    },
    {
      img: '/Amenities/pool.webp',
      title: 'Swimming Pool',
    },
    {
      img: '/Amenities/court.jpeg',
      title: 'Basketball Court',
    },
    {
      img: '/Amenities/waitingArea.jpg',
      title: 'Waiting Area',
    },
    {
      img: '/Amenities/park.webp',
      title: 'Park',
    },
  ];

  return (
    <section className='bg-white py-10 px-4'>
      <div className='container mx-auto'>
        <div ref={ref} className='overflow-x-hidden font-GowunBatang'>
          <motion.h2
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4'
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            Ground Floor Amenities
          </motion.h2>
          <motion.p
            className='text-lg md:text-xl lg:text-2xl text-gray-600 text-center mb-6'
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
            Exceptional Experiences Begin Here, From The Ground Up.
          </motion.p>
        </div>
        <div className='h-60 md:h-72 lg:h-96'>
          <SwiperComponent images={images} />
        </div>
      </div>
    </section>
  );
};

export default GroundFloor;
