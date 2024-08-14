import React from 'react';

const RowComponent = ({ sectionName, subSection }) => (
  <div className="flex flex-wrap ">
    <div className="w-full sm:w-1/2 md:w-1/3">
      <div className="h-full p-4 border border-l-0 border-gray-200 text-md font-semibold ">
        {sectionName}
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 flex-grow">
      <div className="h-full p-4 border border-r-0 border-gray-200 bg-white ">
        {subSection}
      </div>
    </div>
  </div>
);

const ClientInfo = () => {
  const personalInfo = {
    name: 'Priya Sharma',
    age: 12,
    grade: '9th',
    contact: 'Phone: +91 9136285805'
  };

  return (
    <div className=''>
      <div className='mb-4 mt-6 text-2xl font-semibold'>
        Sections
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-gray-100 p-4 border-b border-gray-300 text-gray-500 text-base">
            Section Name
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex-grow">
          <div className="bg-gray-100 p-4 pl-9 border-b border-gray-300 text-gray-500 text-base">
            Sub Sections
          </div>
        </div>
      </div>
      {RowComponent({
        sectionName: "Personal Information",
        subSection:
          <div className='flex flex-col p-3 px-5'>
            <span className='mb-1'><span className='font-semibold'>Name: </span><span className='text-gray-500'>{personalInfo.name}</span></span>
            <span className='mb-1'><span className='font-semibold'>Age: </span><span className='text-gray-500'>{personalInfo.age}</span></span>
            <span className='mb-1'><span className='font-semibold'>Grade: </span><span className='text-gray-500'>{personalInfo.grade}</span></span>
            <span><span className='font-semibold'>Contact details: </span><span className='text-gray-500'>{personalInfo.contact}</span></span>
          </div>
      })}
      {RowComponent({
        sectionName: "Educational Background",
        subSection:
          <div className='p-3 px-5'>
            <div className="flex flex-wrap justify-center font-semibold">
              <div className="w-1/2">
                <div className="mb-1">
                  Current Academic Performance
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-1">
                  Previous Grades
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/2 ">
                <ul className='list-disc  pl-6'>
                  <li className='mb-1 text-gray-500'>Mathematics: 85%</li>
                  <li className='mb-1 text-gray-500'>Social Science: 96%</li>
                  <li className='mb-1 text-gray-500'>English: 88%</li>
                  <li className='mb-1 text-gray-500'>Science: 83%</li>
                  <li className='mb-1 text-gray-500'>Language: 88%</li>
                </ul>
              </div>
              <div className="w-1/2 ">
                <ul className='list-disc  pl-6'>
                  <li className='mb-1 text-gray-500'>9th grade overall percentage: 85%</li>
                  <li className='mb-1 text-gray-500'>10th grade overall percentage: 88%</li>
                </ul>
              </div>
            </div>
          </div>
      })}
      {RowComponent({
        sectionName: "Interest and Hobbies",
        subSection:
          <div className='p-3 px-5'>
            <div >
              <span className='font-semibold'>Extracurricular Activities:</span>
              <ul className='list-disc  pl-6'>
                <li className='mb-1'>
                  <span><span className='font-semibold text-gray-600'>Sports: </span>
                  <span className='text-gray-500'>Member of the school basketball team </span></span>
                </li>
                <li className='mb-1'>
                  <span><span className='font-semibold text-gray-600'>Clubs: </span>
                  <span className='text-gray-500'>Science club, debate team </span></span>
                </li>
              </ul>
            </div>
            <div className='mt-4'>
              <span className=' font-semibold'>Subject of Interest:</span>
              <ul className='list-disc  pl-6'>
                <li className='mb-1'>
                  <span><span className='font-semibold text-gray-600'>Favorite Subjects: </span><span className='text-gray-500'>Physics, Mathematics.</span></span>
                </li>
                <li className='mb-1'>
                  <span><span className='font-semibold text-gray-600'>Hobbies: </span><span className='text-gray-500'>Reading science fiction, playing chess.</span></span>
                </li>
              </ul>
            </div>
          </div>
      })}
      {RowComponent({
        sectionName: "Strengths and Weakness",
        subSection:
          <div className='p-3 px-5'>
            <div>
              <span className='font-semibold'>Academic Strengths:</span>
              <ul className='list-disc  pl-6'>
                <li className='mb-1 text-gray-500'>
                Improve Social Studies grade to at least 85% by the end of the semester.
                </li>
                <li className='mb-1 text-gray-500'>
                Participate in the upcoming inter-school debate competition.
                </li>
              </ul>
            </div>
            <div className='mt-4'>
              <span className='font-semibold'>Areas Needing Improvement:</span>
              <ul className='list-disc  pl-6'>
                <li className='mb-1 text-gray-500'>
                Pursue a career in Engineering, specifically in Robotics.
                </li>
                <li className='mb-1 text-gray-500'>
                Requires additional practice in Social Studies to improve retention and understanding.
                </li>
              </ul>
            </div>
          </div>
      })}
      {RowComponent({
        sectionName: "Goals and Aspirations",
        subSection:
          <div className='p-3 px-5'>
            <div>
              <span className='font-semibold'>Short-term Goals:</span>
              <ul className='list-disc  pl-6'>
                <li className='mb-1 text-gray-500'>
                Strong analytical skills in Mathematics and Physics.
                </li>
                <li className='mb-1 text-gray-500'>
                Excellent comprehension and performance in English literature.
                </li>
              </ul>
            </div>
            <div className='mt-4'>
              <span className='font-semibold'>Long-term Goals:</span>
              <ul className='list-disc  pl-6'>
                <li className='mb-1 text-gray-500'>
                Needs to work on time management skills.
                </li>
                <li className='mb-1 text-gray-500'>
                Gain admission to a top engineering college such as IIT or BITS Pilani.
                </li>
              </ul>
            </div>
          </div>
      })}
    </div>
  );
};

export default ClientInfo;