import { TbCheck, TbChecklist, TbFlag, TbLayoutKanban, TbProgress, TbUser, TbUsers } from 'react-icons/tb';
export const nestedListInitialData = [{
  id: 1,
  title: 'Design Phase'
}, {
  id: 2,
  title: 'Development Phase',
  children: [{
    id: 4,
    title: 'Frontend Implementation'
  }, {
    id: 5,
    title: 'Backend API Setup',
    children: [{
      id: 6,
      title: 'Authentication Module'
    }, {
      id: 7,
      title: 'Database Schema'
    }]
  }]
}, {
  id: 3,
  title: 'Testing Phase',
  children: [{
    id: 8,
    title: 'Unit Tests'
  }, {
    id: 9,
    title: 'Integration Tests'
  }]
}];
export const nestedListWithHandleData = [{
  id: 1,
  title: 'Project Alpha',
  children: [{
    id: 2,
    title: 'Design Phase'
  }, {
    id: 3,
    title: 'Development Phase',
    children: [{
      id: 4,
      title: 'Frontend Module'
    }, {
      id: 5,
      title: 'Backend Module'
    }, {
      id: 6,
      title: 'API Integration'
    }, {
      id: 7,
      title: 'Unit Testing'
    }]
  }, {
    id: 8,
    title: 'QA Review'
  }, {
    id: 9,
    title: 'Deployment'
  }]
}];
export const groupedSortableData = [{
  id: 1,
  icon: TbLayoutKanban,
  title: 'Tasks',
  children: [{
    id: 2,
    title: 'To Do',
    icon: TbCheck
  }, {
    id: 3,
    title: 'In Progress',
    icon: TbProgress
  }, {
    id: 4,
    title: 'Completed',
    icon: TbChecklist
  }]
}, {
  id: 5,
  icon: TbFlag,
  title: 'Milestones',
  children: [{
    id: 6,
    title: 'Project Kickoff',
    icon: TbFlag
  }, {
    id: 7,
    title: 'Phase 1 Completion',
    icon: TbFlag
  }, {
    id: 8,
    title: 'Final Delivery',
    icon: TbFlag
  }]
}, {
  id: 9,
  icon: TbUsers,
  title: 'Teams',
  children: [{
    id: 10,
    title: 'Development Team',
    icon: TbUser
  }, {
    id: 11,
    title: 'Design Team',
    icon: TbUser
  }, {
    id: 12,
    title: 'QA Team',
    icon: TbUser
  }]
}];