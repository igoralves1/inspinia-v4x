import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

export interface TimelineItem {
  time?: string
  title: string
  description: string
  author: string
  variant?: string
  icon?: string
  image?: string
}

export const timelineItems1: TimelineItem[] = [
  {
    time: 'Just Now',
    title: 'Weekly Stand-Up Meeting',
    description: 'Team members shared updates, discussed blockers, and aligned on weekly goals.',
    author: 'Olivia Rodriguez',
    variant: 'primary',
  },
  {
    time: '10:00 AM, Tuesday',
    title: 'Project Kickoff',
    description: 'Introduced project scope, goals, and assigned initial roles to team members.',
    author: 'Isabella Cooper',
    variant: 'danger',
  },
  {
    time: 'Yesterday, 3:15 PM',
    title: 'Design Review',
    description: 'Reviewed initial UI mockups and gathered feedback for the next design iteration.',
    author: 'Ethan Murphy',
    variant: 'warning',
  },
  {
    time: 'Monday, 1:00 PM',
    title: 'Client Feedback Session',
    description: 'Discussed client feedback and agreed on key changes for the next sprint.',
    author: 'Liam Chen',
    variant: 'info',
  },
  {
    time: 'Last Friday, 4:30 PM',
    title: 'Code Deployment',
    description: 'Successfully deployed the latest build to the staging environment.',
    author: 'Ava Thompson',
    variant: 'purple',
  },
]

export const timelineItems2: TimelineItem[] = [
  {
    time: '5 mins ago',
    title: 'Bug Fix Deployed',
    description: 'Resolved a critical login issue affecting mobile users.',
    author: 'Marcus Bell',
    icon: 'tabler:bug',
    variant: 'primary',
  },
  {
    time: 'Today, 9:00 AM',
    title: 'Marketing Strategy Call',
    description: 'Outlined Q2 goals and content plan for the product launch campaign.',
    author: 'Emily Davis',
    icon: 'tabler:phone-call',
    variant: 'danger',
  },
  {
    time: 'Yesterday, 4:45 PM',
    title: 'Feature Planning Session',
    description: 'Prioritized new features for the upcoming release based on user feedback.',
    author: 'Daniel Kim',
    icon: 'tabler:layers-subtract',
    variant: 'warning',
  },
  {
    time: 'Tuesday, 11:30 AM',
    title: 'UI Enhancements Pushed',
    description: 'Improved dashboard responsiveness and added dark mode support.',
    author: 'Sofia Martinez',
    icon: 'tabler:layout-dashboard',
    variant: 'info',
  },
  {
    time: 'Last Thursday, 2:20 PM',
    title: 'Security Audit Completed',
    description: 'Reviewed backend API endpoints and applied new encryption standards.',
    author: 'Jonathan Lee',
    icon: 'tabler:shield-lock',
    variant: 'purple',
  },
]

export const timelineItems3: TimelineItem[] = [
  {
    time: '10 mins ago',
    icon: 'tabler:rocket',
    title: 'New Feature Released',
    description: 'Launched the real-time chat feature across all user accounts.',
    author: 'Natalie Brooks',
  },
  {
    time: 'Today, 11:15 AM',
    icon: 'tabler:calendar',
    title: 'Team Sync-Up',
    description: 'Reviewed sprint progress and discussed remaining tasks.',
    author: 'Oliver Grant',
  },
  {
    time: 'Yesterday, 2:40 PM',
    icon: 'tabler:palette',
    title: 'UI Design Review',
    description: 'Refined component spacing and color scheme for better accessibility.',
    author: 'Clara Jensen',
  },
  {
    time: 'Tuesday, 3:30 PM',
    icon: 'tabler:database',
    title: 'Database Optimization',
    description: 'Refactored queries to reduce API response times by 35%.',
    author: 'Leo Armstrong',
  },
  {
    time: 'Last Thursday, 5:00 PM',
    icon: 'tabler:lock',
    title: 'Compliance Check Passed',
    description: 'Successfully passed GDPR compliance audit with zero violations.',
    author: 'Mia Thompson',
  },
]

export const timelineItems4: TimelineItem[] = [
  {
    image: user1,
    title: 'Dashboard Revamp Completed',
    description: 'The new layout and theme for the analytics dashboard have been deployed.',
    author: 'Emma Carter',
  },
  {
    image: user2,
    title: 'Onboarding Guide Published',
    description: 'Uploaded the latest documentation to help new users get started quickly.',
    author: 'Noah Mitchell',
  },
  {
    image: user3,
    title: 'Performance Improvements',
    description: 'Reduced page load time by optimizing image assets and scripts.',
    author: 'Ava Morgan',
  },
  {
    image: user4,
    title: 'Security Patch Released',
    description: 'Patched a vulnerability related to token expiration in the API.',
    author: 'James Parker',
  },
  {
    image: user5,
    title: 'Client Training Session',
    description: 'Hosted a live training session with 30+ clients on the new reporting tools.',
    author: 'Sophia Bennett',
  },
]
