// import React, { useEffect } from 'react';
// import Button from '../Button/Button';

// const Header = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         document.getElementById('header').classList.add('bg-primary');
//         document.getElementById('header').classList.add('shadow-lg');
//       } else {
//         document.getElementById('header').classList.remove('bg-primary');
//         document.getElementById('header').classList.remove('shadow-lg');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id='header'
//       className='transition-all duration-300 w-full px-56 py-2 flex justify-between items-center sticky top-0 z-50'>
//       <div>
//         <img
//           src='https://shalimarcorp-skygarden.in/wp-content/uploads/2023/11/sky-garden-logo-2-e1705134723955.webp'
//           alt='logo'
//           className='w-32'
//         />
//       </div>
//       <div>
//         <Button text='Enquire Now' />
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useEffect } from 'react';
import Button from '../Button/Button';

const Header = ({ scrollToContact }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('bg-primary', 'shadow-lg');
      } else {
        header.classList.remove('bg-primary', 'shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='header'
      className='transition-all duration-300 w-full px-4 md:px-16 lg:px-56 py-2 flex justify-between items-center sticky top-0 z-50'>
      <div>
        <img
          src='https://shalimarcorp-skygarden.in/wp-content/uploads/2023/11/sky-garden-logo-2-e1705134723955.webp'
          alt='logo'
          className='w-32'
        />
      </div>
      <div className='hidden md:block'>
        <Button text='Enquire Now' handleClick={scrollToContact} />
      </div>
      {/* Mobile button */}
      <div className='md:hidden'>
        <Button text='Enquire' handleClick={scrollToContact} />
      </div>
    </div>
  );
};

export default Header;
