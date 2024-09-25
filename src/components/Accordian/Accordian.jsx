// // Accordion.js
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const AccordionItem = ({ title, content, isOpen, onToggle }) => {
//   return (
//     <div
//       className={`border-b border-gray-300 transition-all duration-300 max-w-full overflow-hidden`}>
//       <div
//         className='flex justify-between items-center p-4 cursor-pointer hover:bg-blue-100 transition-colors duration-300'
//         onClick={onToggle}>
//         <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
//         <span className='text-2xl text-gray-600'>{isOpen ? '-' : '+'}</span>
//       </div>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }} // Start closed
//             animate={{ opacity: 1, height: 'auto' }} // Open animation
//             exit={{ opacity: 0, height: 0 }} // Close animation
//             transition={{ duration: 0.3 }} // Animation duration
//             className='p-4 bg-blue-50 rounded-b-md'>
//             <p className='text-gray-700'>{content}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const accordionData = [
//     {
//       title: 'Location Advantage 1',
//       content:
//         'This is the content for location advantage 1. It provides key benefits like accessibility and amenities.',
//     },
//     {
//       title: 'Location Advantage 2',
//       content:
//         'This is the content for location advantage 2. It is strategically positioned near major transport links.',
//     },
//     {
//       title: 'Location Advantage 3',
//       content:
//         'This is the content for location advantage 3. It has nearby schools, parks, and shopping areas.',
//     },
//     {
//       title: 'Location Advantage 3',
//       content:
//         'This is the content for location advantage 3. It has nearby schools, parks, and shopping areas.',
//     },
//     {
//       title: 'Location Advantage 3',
//       content:
//         'This is the content for location advantage 3. It has nearby schools, parks, and shopping areas.',
//     },
//   ];

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className='w-full mx-auto '>
//       <h1 className='text-2xl font-bold font-GowunBatang px-4 py-5 text-gray-800'>
//         Location Advantage
//       </h1>
//       {accordionData.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title={item.title}
//           content={item.content}
//           isOpen={openIndex === index}
//           onToggle={() => toggleAccordion(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Accordion;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className='border-b border-gray-300 transition-all duration-300 max-w-full overflow-hidden'>
      <div
        className='flex justify-between items-center p-4 cursor-pointer hover:bg-blue-100 transition-colors duration-300'
        onClick={onToggle}
        role='button'
        tabIndex={0} // Make it keyboard-accessible
        onKeyDown={(e) => e.key === 'Enter' && onToggle()} // Handle Enter key for accessibility
      >
        <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
        <span className='text-2xl text-gray-600'>{isOpen ? '-' : '+'}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='p-4 bg-blue-50 rounded-b-md'>
            <p className='text-gray-700'>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: 'Location Advantage 1',
      content:
        'This is the content for location advantage 1. It provides key benefits like accessibility and amenities.',
    },
    {
      title: 'Location Advantage 2',
      content:
        'This is the content for location advantage 2. It is strategically positioned near major transport links.',
    },
    {
      title: 'Location Advantage 3',
      content:
        'This is the content for location advantage 3. It has nearby schools, parks, and shopping areas.',
    },
    {
      title: 'Location Advantage 4',
      content:
        'This is the content for location advantage 4. It features a vibrant community and recreational spaces.',
    },
    {
      title: 'Location Advantage 5',
      content:
        'This is the content for location advantage 5. It offers a serene environment close to nature.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full mx-auto'>
      <h1 className='text-2xl font-bold font-GowunBatang px-4 py-5 text-gray-800'>
        Location Advantage
      </h1>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
