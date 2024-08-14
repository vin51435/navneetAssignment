import React from 'react'

const DetailBox = ({ title, content }) => (
  <div className="mr-2 my-1 border-solid border border-gray-200 w-fit rounded-md px-3 py-1 flex items-center">
    <span className='text-gray-500'>{title}</span>
    <span className='mx-1'> :-  </span>
    <span className='font-medium'>{content}</span>
  </div>
);

export default DetailBox