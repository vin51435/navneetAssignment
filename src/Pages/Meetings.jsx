import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import DetailBox from '../Components/DetailBox';
const ClientInfo = React.lazy(() => import('../Components/ClientInfo'));

export const Meetings = () => {
  const [data, setData] = useState({
    title: 'Student Counselling Sessions',
    titleEditable: false,
    status: {
      'Meeting Type': 'Online',
      'Date': '12th August 2024',
      'Start Time': '10:30am',
      'Duration': '01H 40M'
    }
  });
  const titleInputRef = useRef(null);
  const containerRef = useRef(null);

  const chapMenu = {
    'Client information': <ClientInfo />,
    'Action items': 'Action Items',
    'intent': 'intent', 'Emotion': 'Emotion', 'Key words to highlight': 'Key words to highlight',
    'Follow up mail': 'Follow up mail', 'Transcript': 'Transcript'
  };

  const [chap, setChap] = useState(Object.keys(chapMenu)[0]);

  // Handle pencil click to toggle edit mode
  const handlePencilClick = () => {
    setData(prev => {
      const newEditable = !prev.titleEditable;
      if (newEditable && titleInputRef.current) {
        titleInputRef.current.focus();
      }
      return { ...prev, titleEditable: newEditable };
    });
  };

  // Handle clicks outside the container to exit edit mode
  const handleClickOutside = useCallback((event) => {
    if (containerRef.current && !(event?.target?.name === 'title')) {
      setData(prev => ({ ...prev, titleEditable: false }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const inputElement = titleInputRef.current;

    const adjustWidth = () => {
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.whiteSpace = 'pre';
      tempSpan.style.font = window.getComputedStyle(inputElement).font; // Ensure same font style
      tempSpan.textContent = inputElement.value || inputElement.placeholder;
      document.body.appendChild(tempSpan);
      inputElement.style.width = `${tempSpan.offsetWidth}px`; // Add margin to ensure no content cut-off
      document.body.removeChild(tempSpan);
    };

    adjustWidth(); // Initial adjustment

    inputElement.addEventListener('input', adjustWidth);
    return () => {
      inputElement.removeEventListener('input', adjustWidth);
    };
  }, [data.title]);

  return (
    <div ref={containerRef}>
      <div className='mb-7 flex justify-start items-center  '>
        <span className='text-md mr-2 cursor-pointer'><IoIosArrowBack /></span><span className='text-blue-500 text-2xl font-bolder'>Meetings</span>
      </div>
      <div className='mb-3 flex justify-start items-center text-xl'>
        <input
          type='text'
          value={data.title}
          name='title'
          disabled={!data.titleEditable}
          placeholder='Enter Title'
          ref={titleInputRef}
          className={`font-semibold bg-transparent focus:outline-none text-2xl ${data.titleEditable ? 'underline decoration-dashed decoration-blue-500 underline-offset-4' : ''}`}
          onChange={e => setData(prev => ({ ...prev, title: e.target.value }))}
        />
        <span className='text-blue-500 cursor-pointer ml-2 cursor-pointer' onClick={handlePencilClick}>
          <LuPencil />
        </span>
      </div>
      <div className='flex flex-wrap'>
        {Object.entries(data.status).map(([key, value]) => (
          <DetailBox key={key} title={key} content={value} />
        ))}
      </div>
      <div className='mt-5'>
       <div className='flex justify-start item-center flex-wrap border-b text-gray-500 border-b-gray-200'>
       {Object.keys(chapMenu).map((item) => (
          <span
            className={`cursor-pointer relative px-2 pb-1 mx-1 m-0 flex-grw flex justify-center ${item === chap ?
              'border-b-2 text-blue-500 border-b-blue-500' : 
              ''}`}
            key={item}
            onClick={() => setChap(item)}
          >
            {item}
          </span>
        ))}
       </div>
        <Suspense fallback={<div className='flex justify-center items-center p-6'>Loading...</div>}>
          <div>{chapMenu[chap]}</div> 
        </Suspense>
      </div>
    </div>
  );
};
