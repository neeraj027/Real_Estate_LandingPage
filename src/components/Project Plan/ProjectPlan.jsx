// import React, { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { useAnimation, motion } from 'framer-motion';
// import Button from '../Button/Button';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ProjectPlan = () => {
//   const images = [
//     '/projectPlan/projectPlan1.webp',
//     '/projectPlan/projectPlan2.webp',
//     '/projectPlan/projectPlan3.webp',
//     '/projectPlan/projectPlan4.webp',
//   ];
//   const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Loop the slides
//     speed: 500, // Transition speed
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Duration of autoplay
//     slidesToShow: 2, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll at once
//     arrows: false, // Disable arrows
//   };

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

//   return (
//     <section className='py-10 px-4'>
//       <div className='container mx-auto'>
//         <div ref={ref} className='my-8 overflow-x-hidden font-GowunBatang'>
//           <motion.h2
//             className='text-4xl font-bold text-center mb-2'
//             initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
//             animate={controls}
//             transition={{ duration: 0.8, ease: 'easeOut' }}>
//             Project Plans
//           </motion.h2>
//           <motion.p
//             className='text-lg text-gray-600 text-center mb-8'
//             initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
//             animate={controls}
//             transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
//             {' '}
//             {/* Optional delay for the paragraph */}
//             The City&apos;s Most Extravagant Spaces Follow An Exceptional Plan.
//           </motion.p>
//         </div>

//         <div className='w-full flex justify-center gap-10 my-5'>
//           <Button text={'Master Plans'} bgcolor='secondary' />
//           <Button text={'Floor Plans'} bgcolor='light' textColor='primary' />
//         </div>
//         <div className='w-full max-w-6xl mx-auto'>
//           <Slider {...settings}>
//             {images.map((img, index) => (
//               <div key={index} className='p-2'>
//                 <div className='rounded-lg overflow-hidden'>
//                   <img
//                     src={img}
//                     alt={`Slide ${index}`}
//                     className='w-full h-auto'
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectPlan;

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import Button from '../Button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectPlan = () => {
  const images = [
    '/projectPlan/projectPlan1.webp',
    '/projectPlan/projectPlan2.webp',
    '/projectPlan/projectPlan3.webp',
    '/projectPlan/projectPlan4.webp',
  ];

  // Slider settings with responsive adjustments
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for larger screens
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1, // Show 1 slide on tablets
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [controls, inView]);

  return (
    <section className='py-10 px-4'>
      <div className='container mx-auto'>
        <div ref={ref} className='my-8 overflow-x-hidden font-GowunBatang'>
          <motion.h2
            className='text-4xl font-bold text-center mb-2'
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            Project Plans
          </motion.h2>
          <motion.p
            className='text-lg text-gray-600 text-center mb-8'
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
            The City&apos;s Most Extravagant Spaces Follow An Exceptional Plan.
          </motion.p>
        </div>

        <div className='w-full flex justify-center gap-10 my-5'>
          <Button text={'Master Plans'} bgcolor='secondary' />
          <Button text={'Floor Plans'} bgcolor='light' textColor='primary' />
        </div>

        <div className='w-full max-w-6xl mx-auto'>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className='p-2'>
                <div className='rounded-lg overflow-hidden'>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className='w-full h-auto'
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectPlan;
