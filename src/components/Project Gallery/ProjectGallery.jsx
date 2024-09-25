// import Button from '../Button/Button';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ProjectGallery = () => {
//   const images = [
//     '/projectGallery/gym.jpeg',
//     '/projectGallery/balcony.webp',
//     '/projectGallery/1.jpg',
//     '/projectGallery/pool.webp',
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

//   return (
//     <div className='h-max overflow-hidden'>
//       {/* Background Image */}
//       <div className='inset-0'>
//         <div
//           className='bg-fixed bg-center bg-cover h-max'
//           style={{
//             backgroundImage: 'url(  "/BgImages/bg1.jpg"  )',
//           }}>
//           <section className='py-10 px-4'>
//             <div className='container mx-auto'>
//               <div className=' font-GowunBatang'>
//                 <h2 className='text-4xl font-bold text-white text-center mb-2'>
//                   Project Gallery
//                 </h2>
//                 <p className='text-lg text-gray-100 text-center mb-8'>
//                   {' '}
//                   {/* Optional delay for the paragraph */}
//                   The Grandest Living Spaces at the Elitest Luxury Community.
//                 </p>
//               </div>
//               <div className='w-full flex justify-center gap-10 my-5'>
//                 <Button text={'Exterior'} bgcolor='secondary' />
//                 <Button text={'Interior'} bgcolor='light' textColor='light' />
//               </div>
//               <div className='w-full max-w-6xl mx-auto'>
//                 <Slider {...settings}>
//                   {images.map((img, index) => (
//                     <div key={index} className='p-2'>
//                       <div className='rounded-lg overflow-hidden'>
//                         <img
//                           src={img}
//                           alt={`Slide ${index}`}
//                           className='w-full h-96 object-cover'
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectGallery;

import Button from '../Button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectGallery = () => {
  const images = [
    '/projectGallery/gym.jpeg',
    '/projectGallery/balcony.webp',
    '/projectGallery/1.jpg',
    '/projectGallery/pool.webp',
  ];

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

  return (
    <div className='h-max overflow-hidden'>
      {/* Background Image */}
      <div className='inset-0'>
        <div
          className='bg-fixed bg-center bg-cover h-max'
          style={{
            backgroundImage: 'url("/BgImages/bg1.jpg")',
          }}>
          <section className='py-10 px-4'>
            <div className='container mx-auto'>
              <div className='font-GowunBatang'>
                <h2 className='text-4xl font-bold text-white text-center mb-2'>
                  Project Gallery
                </h2>
                <p className='text-lg text-gray-100 text-center mb-8'>
                  The Grandest Living Spaces at the Elitest Luxury Community.
                </p>
              </div>
              <div className='w-full flex justify-center gap-10 my-5'>
                <Button text={'Exterior'} bgcolor='secondary' />
                <Button text={'Interior'} bgcolor='light' textColor='light' />
              </div>
              <div className='w-full max-w-6xl mx-auto'>
                <Slider {...settings}>
                  {images.map((img, index) => (
                    <div key={index} className='p-2'>
                      <div className='rounded-lg overflow-hidden'>
                        <img
                          src={img}
                          alt={`Slide ${index}`}
                          className='w-full h-96 object-cover'
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
