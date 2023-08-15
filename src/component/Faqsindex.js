import React, { useState } from 'react';
import FAQs from './Faq';

function FAQ () {
  const [faqs, setfaqs] = useState([
    {
      question: 'How much do Meals on Wheels cost?',
      answer: 'Meals on Wheels meals are provided at production cost and range in price from $4.50 to $12.00, depending on the service. ',
      open: true
    },
    {
      question: 'Can anyone get Meals on Wheels?',
      answer: 'Meals on Wheels is an essential service that delivers meals to those unable to cook or shop for themselves or living with an illness or disability.',
      open: false
    },
    {
      question: 'How do I become a Meals on Wheels customer?',
      answer: 'Simply click here to find your local service and give them a call or reach out via email.',
      open: false
    },
    {
      question: 'How do I volunteer for Meals on Wheels?',
      answer: 'If you are interested in volunteering for Meals on Wheels, click here to find the details of your local service, and get in touch to discuss opportunities today.',
      open: false
    },
    {
      question: 'How do I find my local service?',
      answer: 'Click here to find the contact details for a Meals on Wheels service operating near you.',
      open: false
    },
    {
        question: 'I have a complaint or feedback for my local service. Who do I send it to?',
        answer: 'If you wish to file a complaint or provide feedback about your local service, the best thing you can do is contact them directly. You may also submit your feedback here.',
        open: false
      }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQs faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;