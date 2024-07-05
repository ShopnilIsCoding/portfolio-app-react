import React from 'react';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300 p-4 flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Education</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 px-4'>
          <div className='bg-[#112240] p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold mb-2'>Bangladesh University of Business & Technology</h3>
            <p className='text-lg font-semibold mb-1'>B.Sc. in Computer Science and Engineering</p>
            <p className='text-sm mb-1'>2022 - Current</p>
            <p className='text-sm'>CGPA: 3.70</p>
          </div>
          <div className='bg-[#112240] p-6 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-bold mb-2'>Cantonment College Jashore</h3>
            <p className='text-lg font-semibold mb-1'>Science</p>
            <p className='text-sm mb-1'>2018 - 2020</p>
            <p className='text-sm'>GPA: 5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
