import React from 'react'
import AccordionUsage from '../Components/MaterialUi/Accordion/AccordionUsage'
import Data from '../Data/FrequentlyQuestions'
const FrequentlyQuestions = () => {
  return (
    <div className='w-full h-[1200px] bg-linear-to-r from-cyan-500 to-blue-200'>
      <AccordionUsage DataInform={Data} />
    </div>
  )
}

export default FrequentlyQuestions
