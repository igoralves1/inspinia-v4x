export type PinNoteType = {
  id: string
  timestamp: string
  title: string
  content: string
  variant: string
}

export const pinNotes: PinNoteType[] = [
  {
    id: 'pin-1',
    timestamp: '14:22:07 08-04-2025',
    title: 'Client feedback summary',
    content: 'Positive response on UI, requested dark mode toggle and faster load times.',
    variant: 'primary',
  },
  {
    id: 'pin-2',
    timestamp: '17:09:33 05-04-2025',
    title: 'Blog content ideas',
    content: 'Write about upcoming trends in web design and practical CSS tips.',
    variant: 'danger',
  },
  {
    id: 'pin-3',
    timestamp: '10:55:10 02-04-2025',
    title: 'Code optimization checklist',
    content: 'Refactor JS functions, minimize DOM manipulation, and lazy load assets.',
    variant: 'warning',
  },
  {
    id: 'pin-4',
    timestamp: '09:30:44 30-03-2025',
    title: 'Newsletter draft',
    content: "Focus on April's product update, new feature highlights, and tutorials.",
    variant: 'info',
  },
  {
    id: 'pin-5',
    timestamp: '16:47:25 28-03-2025',
    title: 'Bug report log',
    content: 'Users reporting login timeout issues on mobile—investigate session handling.',
    variant: 'dark',
  },
  {
    id: 'pin-6',
    timestamp: '11:18:03 26-03-2025',
    title: 'Design review notes',
    content: 'Refine hero section spacing and use softer gradients for cards background.',
    variant: 'light',
  },
  {
    id: 'pin-7',
    timestamp: '11:18:03 26-03-2025',
    title: 'Design review notes',
    content: 'Refine hero section spacing and use softer gradients for cards background.',
    variant: 'purple',
  },
  {
    id: 'pin-8',
    timestamp: '08:45:12 10-04-2025',
    title: 'Team meeting recap',
    content: 'Discussed key milestones, delegated tasks, and set deadlines for the next sprint.',
    variant: 'success',
  },
]
