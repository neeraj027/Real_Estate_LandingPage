// import React, { useEffect } from 'react';
// import { FaCheck } from 'react-icons/fa';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Overview = () => {
//   // Controls for each section
//   const controls1 = useAnimation();
//   const controls2 = useAnimation();
//   const controls3 = useAnimation();

//   // Separate inView hooks for different parts of the page
//   const [ref1, inView1] = useInView({ threshold: 0.2 });
//   const [ref2, inView2] = useInView({ threshold: 0.2 });
//   const [ref3, inView3] = useInView({ threshold: 0.2 });

//   // Trigger animations based on scroll position when in view
//   useEffect(() => {
//     if (inView1) {
//       controls1.start({ opacity: 1, y: 0 });
//     }
//   }, [controls1, inView1]);

//   useEffect(() => {
//     if (inView2) {
//       controls2.start({ opacity: 1, y: 0 });
//     }
//   }, [controls2, inView2]);

//   useEffect(() => {
//     if (inView3) {
//       controls3.start({ opacity: 1, y: 0 });
//     }
//   }, [controls3, inView3]);

//   return (
//     <section className='bg-white py-10 px-52'>
//       <motion.div
//         ref={ref1}
//         className='w-full mb-10 flex flex-col justify-center items-center font-GowunBatang'
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls1}
//         transition={{ duration: 0.8, ease: 'easeOut' }}>
//         <motion.h2
//           className='text-6xl font-bold tracking-wide'
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls1}
//           transition={{ duration: 0.8, ease: 'easeOut' }}>
//           Overview
//         </motion.h2>
//         <motion.p
//           className='text-2xl text-gray-600'
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls1}
//           transition={{ duration: 0.8, ease: 'easeOut' }}>
//           It&apos;s Where Extravagance Scales Its True Peak.
//         </motion.p>
//       </motion.div>

//       <div className='container mx-auto flex flex-col lg:flex-row items-start justify-between'>
//         <div className='flex flex-col w-1/2 relative '>
//           <div className='flex w-full justify-start'>
//             <motion.div
//               ref={ref3}
//               className='lg:w-[300px]'
//               initial={{ opacity: 0, y: 100 }} // Start from the bottom
//               animate={controls3}
//               transition={{ duration: 0.8, ease: 'easeOut' }}>
//               <img
//                 className='shadow-lg'
//                 src='/BgImages/building3.webp'
//                 alt='Overview'
//               />
//             </motion.div>
//           </div>
//           <div className='p-10 bg-primary w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
//             <img
//               src='https://shalimarcorp-skygarden.in/wp-content/uploads/2023/11/sky-garden-logo-2-e1705134723955.webp'
//               alt=''
//             />
//           </div>

//           <div className='flex w-full justify-end'>
//             <motion.div
//               ref={ref3}
//               className='lg:w-[300px]'
//               initial={{ opacity: 0, y: 100 }} // Start from the bottom
//               animate={controls3}
//               transition={{ duration: 0.8, ease: 'easeOut' }}>
//               <img
//                 className='shadow-lg object-cover'
//                 src='/BgImages/building4.webp'
//                 alt='Overview'
//               />
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           ref={ref2}
//           className='w-1/2 lg:pr-12 py-20 ml-10 text-justify'
//           initial={{ opacity: 0, y: 100 }}
//           animate={controls2}
//           transition={{ duration: 0.8, ease: 'easeOut' }}>
//           <p className='text-gray-700 mb-8 leading-relaxed'>
//             Shalimar Pinnacle at Shalimar OneWorld: Nestled in the most prime
//             location, offering breathtaking views of Shalimar OneWorld and
//             surrounded by exquisite lakeside experiences. Featuring the
//             grandest-sized homes in the entire township, Shalimar Pinnacle is
//             reserved for those who seek nothing but the absolute best.
//           </p>

//           {/* Feature List */}
//           <ul className='space-y-4 text-gray-700'>
//             <li className='flex gap-3 items-center'>
//               <FaCheck className='text-secondary' />
//               Most Premium Location Within Shalimar Oneworld
//             </li>
//             <li className='flex gap-3 items-center'>
//               <FaCheck className='text-secondary' />
//               Iconic Destination Designed By International Architects
//             </li>
//             <li className='flex gap-3 items-center'>
//               <FaCheck className='text-secondary' />2 Towers of 33 & 36 Storeys
//               Respectively
//             </li>
//             <li className='flex gap-3 items-center'>
//               <FaCheck className='text-secondary' />
//               Lavish 4 BHK + Study + Servant Homes with Decks, Duplexes, and
//               Penthouses
//             </li>
//             <li className='flex gap-3 items-center'>
//               <FaCheck className='text-secondary' />A Landscaped Ground Level
//               with 12 Lifestyle Features
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Overview;

import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Overview = () => {
  // Controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Separate inView hooks for different parts of the page
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  // Trigger animations based on scroll position when in view
  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
    }
  }, [controls3, inView3]);

  return (
    <section className='bg-white py-10 px-4 md:px-10 lg:px-52'>
      <motion.div
        ref={ref1}
        className='w-full mb-10 flex flex-col justify-center items-center font-GowunBatang'
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <motion.h2
          className='text-4xl md:text-6xl font-bold tracking-wide'
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          Overview
        </motion.h2>
        <motion.p
          className='text-lg md:text-2xl text-gray-600'
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          It&apos;s Where Extravagance Scales Its True Peak.
        </motion.p>
      </motion.div>

      <div className='container mx-auto flex flex-col lg:flex-row items-start justify-between'>
        <div className='flex flex-col w-full lg:w-1/2 relative'>
          <div className='flex justify-start'>
            <motion.div
              ref={ref3}
              className='lg:w-[300px] w-full'
              initial={{ opacity: 0, y: 100 }} // Start from the bottom
              animate={controls3}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <img
                className='shadow-lg w-full h-auto'
                src='/BgImages/building3.webp'
                alt='Overview'
              />
            </motion.div>
          </div>
          <div className='p-10 bg-primary w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <img
              src='https://shalimarcorp-skygarden.in/wp-content/uploads/2023/11/sky-garden-logo-2-e1705134723955.webp'
              alt='Logo'
              className='h-16'
            />
          </div>

          <div className='flex justify-end'>
            <motion.div
              ref={ref3}
              className='lg:w-[300px] w-full'
              initial={{ opacity: 0, y: 100 }} // Start from the bottom
              animate={controls3}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <img
                className='shadow-lg w-full h-auto object-cover'
                src='/BgImages/building4.webp'
                alt='Overview'
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref2}
          className='w-full lg:w-1/2 lg:pr-12 py-20 lg:ml-10 text-justify'
          initial={{ opacity: 0, y: 100 }}
          animate={controls2}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <p className='text-gray-700 mb-6 leading-relaxed text-base md:text-lg lg:text-xl'>
            Shalimar Pinnacle at Shalimar OneWorld: Nestled in the most prime
            location, offering breathtaking views of Shalimar OneWorld and
            surrounded by exquisite lakeside experiences. Featuring the
            grandest-sized homes in the entire township, Shalimar Pinnacle is
            reserved for those who seek nothing but the absolute best.
          </p>

          {/* Feature List */}
          <ul className='space-y-4 text-gray-700'>
            <li className='flex gap-3 items-center text-base md:text-lg'>
              <FaCheck className='text-secondary' />
              Most Premium Location Within Shalimar Oneworld
            </li>
            <li className='flex gap-3 items-center text-base md:text-lg'>
              <FaCheck className='text-secondary' />
              Iconic Destination Designed By International Architects
            </li>
            <li className='flex gap-3 items-center text-base md:text-lg'>
              <FaCheck className='text-secondary' />2 Towers of 33 & 36 Storeys
              Respectively
            </li>
            <li className='flex gap-3 items-center text-base md:text-lg'>
              <FaCheck className='text-secondary' />
              Lavish 4 BHK + Study + Servant Homes with Decks, Duplexes, and
              Penthouses
            </li>
            <li className='flex gap-3 items-center text-base md:text-lg'>
              <FaCheck className='text-secondary' />A Landscaped Ground Level
              with 12 Lifestyle Features
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
