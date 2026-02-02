import type { EventInput } from '@fullcalendar/core/index.js';
import type { OptionsType } from './types';

export const initialEvents: EventInput[] = [
  {
    id: '1',
    title: 'Interview - Backend Engineer',
    start: new Date(),
    end: new Date(),
    className: 'bg-primary-subtle text-primary border-start border-3 border-primary',
    
  },
  {
    id: '2',
    title: 'Design Sprint Planning',
    start: new Date(Date.now() + 16000000),
    end: new Date(Date.now() + 20000000),
    className: 'bg-info-subtle text-info border-start border-3 border-info',
  },
  {
    id: '3',
    title: 'Project Kick-off Meeting',
    start: new Date(Date.now() + 400000000),
    end: new Date(Date.now() + 440000000),
    className: 'bg-purple-subtle text-purple border-start border-3 border-purple',
  },
  {
    id: '4',
    title: 'UI/UX Design Review',
    start: new Date(Date.now() + 80000000),
    end: new Date(Date.now() + 180000000),
    className: 'bg-warning-subtle text-warning border-start border-3 border-warning',
  },
  {
    id: '5',
    title: 'Code Review - Frontend',
    start: new Date(Date.now() + 200000000),
    end: new Date(Date.now() + 220000000),
    className: 'bg-success-subtle text-success border-start border-3 border-success',
  },
  {
    id: '6',
    title: 'Team Stand-up Meeting',
    start: new Date(Date.now() + 340000000),
    end: new Date(Date.now() + 345000000),
    className: 'bg-secondary-subtle text-secondary border-start border-3 border-secondary',
  },
  {
    id: '7',
    title: 'Client Presentation Prep',
    start: new Date(Date.now() + 1200000000),
    end: new Date(Date.now() + 1300000000),
    className: 'bg-danger-subtle text-danger border-start border-3 border-danger',
  },
  {
    id: '8',
    title: 'Backend API Integration',
    start: new Date(Date.now() + 2500000000),
    end: new Date(Date.now() + 2600000000),
    className: 'bg-dark-subtle text-dark border-start border-3 border-dark',
  },
];

// external events
export const externalEvents = [
  { id: '11', title: 'Project Kickoff', variant: 'primary' },
  { id: '12', title: 'Team Sync-up', variant: 'secondary' },
  { id: '13', title: 'Client Meeting', variant: 'success' },
  { id: '14', title: 'Product Launch', variant: 'danger' },
  { id: '15', title: 'Internal Review', variant: 'info' },
  { id: '16', title: 'Quarterly Planning', variant: 'warning' },
  { id: '17', title: 'Year-End Celebration', variant: 'dark' },
  { id: '18', title: 'Annual Conference', variant: 'purple' },
]

// Options
export const options: OptionsType[] = [
  { value: 'bg-primary', text: 'Blue' },
  { value: 'bg-secondary', text: 'Gray Dark' },
  { value: 'bg-success', text: 'Green' },
  { value: 'bg-info', text: 'Cyan' },
  { value: 'bg-warning', text: 'Yellow' },
  { value: 'bg-danger', text: 'Red' },
  { value: 'bg-dark', text: 'Dark' }
];

