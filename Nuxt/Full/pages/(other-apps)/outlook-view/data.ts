export type MessageContentType = {
  title: string
  timestamp: string
  content: string
}

export type MessageType = {
  id: string
  name: string
  date: string
  location: string
  summary: string
  badge?: {
    label: string
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  }
  body: MessageContentType
}

export const messages: MessageType[] = [
  {
    id: 'tab-1',
    name: 'Emily Carter',
    date: '12.04.2025',
    location: 'New Haven, CT',
    summary: 'Completed your project milestone and uploaded the final report to the shared folder.',
    body: {
      title: 'Potential Partnership Opportunity',
      timestamp: 'Tuesday, 16 April 2025, 11:48 AM',
      content: `Hello Maria,
      
I hope you're well. I'm reaching out to explore a potential partnership between our teams. We've been following your recent product launches and believe there's strong synergy between our platforms.
      
We'd love to schedule a quick 30-minute call next week to discuss how we might collaborate on upcoming campaigns. Please let me know what your availability looks like.
      
Looking forward to your thoughts.
      
*Best,  
**David Lee**  
Business Development Lead*`,
    },
  },
  {
    id: 'tab-2',
    name: 'Marcus Lee',
    date: '10.04.2025',
    location: 'San Francisco, CA',
    summary: 'Scheduled a team sync for next Monday to review current backlog and sprint goals.',
    badge: { label: 'Special', variant: 'primary' },
    body: {
      title: 'Project Feedback & Next Steps',
      timestamp: 'Thursday, 18 April 2025, 2:15 PM',
      content: `Hi Jason,
      
Thank you for sharing the latest draft of the landing page. The new layout looks clean and intuitive, especially the improvements made to the hero section and the pricing table. I also appreciated how responsive the mobile version feels.

Here are a few suggestions:

* Update the CTA button color to match our brand palette (#3A86FF).
* Replace the placeholder text in the testimonial section.
* Add a subtle animation to the "Features" icons on hover.

Once these changes are in place, we can finalize the QA pass and move on to staging.

*Best regards,  
**Stephanie Harris**  
Senior Product Manager*`,
    },
  },
  {
    id: 'tab-3',
    name: 'Natalie Brooks',
    date: '08.04.2025',
    location: 'Austin, TX',
    summary: 'Sent over the feedback for your design proposal. Waiting on final tweaks.',
    body: {
      title: 'Invoice #INV-1043 Due Soon',
      timestamp: 'Friday, 19 April 2025, 9:22 AM',
      content: `Dear Ms. Patel,
      
This is a gentle reminder that invoice #INV-1043 for your March 2025 subscription will be due on April 22, 2025.

Kindly ensure the payment is processed before the due date to avoid any disruption of services.

If you've already made the payment, please disregard this email.

*Kind regards,  
**Emily Zhang**  
Finance Team – CloudCore Solutions*`,
    },
  },
  {
    id: 'tab-4',
    name: 'Daniel Kim',
    date: '07.04.2025',
    location: 'Seattle, WA',
    summary: "Submitted the final invoice for Q1 deliverables. Let me know if anything's missing.",
    body: {
      title: "We'd love your feedback!",
      timestamp: 'Wednesday, 17 April 2025, 3:15 PM',
      content: `Hi Jordan,
      
We hope you're enjoying your experience with TaskFlow Pro. We'd really appreciate it if you could take 2 minutes to share your thoughts with us.

Thanks for being part of our community!

*Cheers,  
**Nicole Ray**  
Customer Experience – TaskFlow Pro*`,
    },
  },
  {
    id: 'tab-5',
    name: 'Amelia Ross',
    date: '06.04.2025',
    location: 'Denver, CO',
    summary: 'Your access to the internal beta environment has been approved. Welcome aboard!',
    body: {
      title: 'Your support ticket #45782 has been resolved',
      timestamp: 'Saturday, 20 April 2025, 5:42 PM',
      content: `Hello Elias,
      
We're pleased to inform you that your support ticket (#45782) regarding API rate limits has been resolved.

The issue was caused by a misconfigured webhook, which we've now fixed.

*Best regards,  
**Technical Support Team**  
Apex Cloud Systems*`,
    },
  },
  {
    id: 'tab-6',
    name: 'Jason Park',
    date: '05.04.2025',
    location: 'Boston, MA',
    summary: "Please review the attached contract and let me know if you'd like to make edits.",
    body: {
      title: 'Please review the attached contract',
      timestamp: 'Friday, 19 April 2025, 9:15 AM',
      content: `Hi Elias,
      
I’ve attached the revised version of the partnership agreement we discussed during last week’s call. Please take a moment to review and let me know if you'd like to propose any changes.

Once approved, we can move forward with signatures and onboarding.

Looking forward to your feedback.

*Best,  
**Jason Park**  
Contracts & Legal Affairs*`,
    },
  },
  {
    id: 'tab-7',
    name: 'Sophia White',
    date: '03.04.2025',
    location: 'Miami, FL',
    summary: 'Reminder: Your subscription will renew in 3 days. Update billing details if needed.',
    badge: { label: 'Reminder', variant: 'warning' },
    body: {
      title: 'Upcoming Subscription Renewal Notice',
      timestamp: 'Wednesday, 17 April 2025, 2:10 PM',
      content: `Dear Elias,
      
This is a reminder that your premium subscription to InsightPro will automatically renew on 20 April 2025.

If you wish to cancel or update billing, please do so before the renewal date.

*Warm regards,  
**Sophia White**  
Billing Department  
InsightPro Services*`,
    },
  },
]
