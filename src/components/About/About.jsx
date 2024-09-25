// import React, { useEffect } from 'react';
// import { FaCheck } from 'react-icons/fa';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const About = () => {
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
//           About Our Legacy
//         </motion.h2>
//         <motion.p
//           className='text-2xl text-gray-600'
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls1}
//           transition={{ duration: 0.8, ease: 'easeOut' }}>
//           Elevate to an unprecedented league of refined luxury.
//         </motion.p>
//       </motion.div>

//       <div className='container mx-auto flex flex-col lg:flex-row items-start justify-between'>
//         <motion.div
//           ref={ref2}
//           className='w-1/2 lg:pr-12 py-20 ml-10 text-justify'
//           initial={{ opacity: 0, y: 100 }}
//           animate={controls2}
//           transition={{ duration: 0.8, ease: 'easeOut' }}>
//           <p className='text-gray-700 mb-8 leading-relaxed'>
//             Established in 1988, Shalimar Group, a leading luxury property
//             builder in Lucknow, operates across diverse sectors such as Real
//             Estate, Property Management, Allied Services, Civil Construction,
//             Imports & Exports, and Glass Processing. With a business portfolio
//             built on Knowledge, Efficient Management, and Transparency, the
//             group aims to contribute to sectoral growth and development. Having
//             developed 6 million sq. ft. of property, Shalimar plans to add
//             another 15 million sq. ft. in UP and Delhi+NCR. The mission is to
//             provide world-class products and services through the tenets of
//             Knowledge & Expertise, enriching lives and raising societal
//             standards. Supported by a dedicated team of over 1000 personnel,
//             Shalimar has garnered a substantial base of satisfied customers,
//             solidifying its reputation.
//           </p>

//           {/* Feature List */}
//         </motion.div>
//         <div className='flex w-1/2 h-full relative '>
//           <motion.div
//             ref={ref3}
//             className=''
//             initial={{ opacity: 0, y: 100 }} // Start from the bottom
//             animate={controls3}
//             transition={{ duration: 0.8, ease: 'easeOut' }}>
//             <img
//               className='shadow-lg'
//               src='/BgImages/building4.webp'
//               alt='Overview'
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
          About Our Legacy
        </motion.h2>
        <motion.p
          className='text-lg md:text-2xl text-gray-600'
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          Elevate to an unprecedented league of refined luxury.
        </motion.p>
      </motion.div>

      <div className='container mx-auto flex flex-col lg:flex-row items-start justify-between'>
        <motion.div
          ref={ref2}
          className='w-full lg:w-1/2 lg:pr-12 py-10 text-justify'
          initial={{ opacity: 0, y: 100 }}
          animate={controls2}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <p className='text-gray-700 mb-8 leading-relaxed'>
            Established in 1988, Shalimar Group, a leading luxury property
            builder in Lucknow, operates across diverse sectors such as Real
            Estate, Property Management, Allied Services, Civil Construction,
            Imports & Exports, and Glass Processing. With a business portfolio
            built on Knowledge, Efficient Management, and Transparency, the
            group aims to contribute to sectoral growth and development. Having
            developed 6 million sq. ft. of property, Shalimar plans to add
            another 15 million sq. ft. in UP and Delhi+NCR. The mission is to
            provide world-class products and services through the tenets of
            Knowledge & Expertise, enriching lives and raising societal
            standards. Supported by a dedicated team of over 1000 personnel,
            Shalimar has garnered a substantial base of satisfied customers,
            solidifying its reputation.
          </p>
        </motion.div>

        <div className='flex w-full lg:w-1/2 h-full relative '>
          <motion.div
            ref={ref3}
            className='flex justify-center'
            initial={{ opacity: 0, y: 100 }} // Start from the bottom
            animate={controls3}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <img
              className='shadow-lg w-full max-w-md'
              src='/BgImages/building4.webp'
              alt='Overview of our legacy building'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
