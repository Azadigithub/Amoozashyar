import React from 'react'
import AccordionUsage from '../Components/MaterialUi/Accordion/AccordionUsage'
import Data from '../Data/FrequentlyQuestions'
const FrequentlyQuestions = () => {
  return (
    <div>
      <AccordionUsage DataInform={Data} />
    </div>
  )
}

export default FrequentlyQuestions
