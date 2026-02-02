type FAQType = {
  question: string
  answer: string
}

export const generalFaqs: FAQType[] = [
  {
    question: 'What is included in your template purchase?',
    answer:
      'Our templates come with clean source code, comprehensive documentation, SCSS files, and starter project setups for various frameworks (e.g., React, Angular, Laravel).',
  },
  {
    question: 'Do you offer support after purchase?',
    answer: 'Yes! We provide 6 months of free support for bug fixes, usage questions, and minor updates. You can also extend support if needed.',
  },
  {
    question: 'Can I use the template for multiple projects?',
    answer: 'The standard license allows use in a single end product. For multiple projects, a separate license is required for each use case.',
  },
  {
    question: 'Are the templates compatible with the latest frameworks?',
    answer:
      'Yes, we regularly update our templates to ensure compatibility with the latest versions of frameworks like Bootstrap, React, Angular, Laravel, and others.',
  },
  {
    question: 'Do you provide Figma or design files?',
    answer: 'Yes, we include Figma or design source files with selected templates. Please check the product details or contact us if unsure.',
  },
]

export const paymentFaqs: FAQType[] = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, PayPal, and Stripe payments. Some marketplaces may support additional methods.',
  },
  {
    question: 'Will I receive an invoice after purchase?',
    answer: 'Yes, you will receive an official invoice or receipt via email immediately after your purchase is completed.',
  },
  {
    question: 'Is there a refund policy?',
    answer:
      'Yes, we follow the refund policy of the marketplace where the item was purchased. Please refer to their refund terms or contact us directly if unsure.',
  },
  {
    question: 'Can I upgrade my license later?',
    answer: 'Absolutely! You can upgrade your license at any time by contacting support or purchasing the extended license separately.',
  },
  {
    question: 'Why was my payment declined?',
    answer:
      'Payment failures may occur due to incorrect card info, insufficient funds, or bank restrictions. Please try another method or contact your provider.',
  },
]

export const refundFaqs: FAQType[] = [
  {
    question: 'What is your refund policy?',
    answer:
      'We offer refunds within 14 days of purchase if the template is faulty or not as described. Please review the full policy or reach out for clarification.',
  },
  {
    question: 'How do I request a refund?',
    answer: 'You can request a refund by contacting our support team with your order ID and a brief reason for the request.',
  },
  {
    question: 'Are there any non-refundable purchases?',
    answer: 'Custom services, extended licenses, and downloadable assets with confirmed usage typically aren’t refundable.',
  },
]

export const customizationFaqs: FAQType[] = [
  {
    question: 'Do you offer customization services?',
    answer: 'Yes, we offer paid customization services based on your requirements. Contact us for a quote.',
  },
  {
    question: 'Can I modify the template myself?',
    answer: 'Absolutely! All templates come with full source code and documentation to help you make your own changes.',
  },
  {
    question: 'Will customizing the template affect support?',
    answer: 'Support is still available, but major custom changes may not be covered under standard support terms.',
  },
]
