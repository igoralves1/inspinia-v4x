import { TbArchive, TbBan, TbBell, TbCalendarEvent, TbFileAnalytics, TbFileDescription, TbFolderFilled, TbKey, TbLayoutDashboard, TbLock, TbMusic, TbPhoto, TbPlayerPlay, TbReport, TbSettings, TbUserPlus, TbUsers, TbUsersGroup } from 'react-icons/tb';
export const data = [{
  id: '1',
  text: 'Main Category',
  icon: <TbFolderFilled className="text-warning fs-lg" />,
  defaultOpen: true,
  children: [{
    id: '1.1',
    text: 'Dashboard',
    icon: <TbLayoutDashboard className="text-success fs-lg" />,
    checked: true
  }, {
    id: '1.2',
    text: 'Reports',
    icon: <TbReport className="text-info fs-lg" />,
    defaultOpen: true,
    children: [{
      id: '1.2.1',
      text: 'Annual Report',
      icon: <TbFileDescription className="text-warning fs-lg" />
    }, {
      id: '1.2.2',
      text: 'Monthly Report',
      icon: <TbFileAnalytics className="text-secondary fs-lg" />,
      checked: true
    }]
  }, {
    id: '2',
    text: 'User Management',
    icon: <TbUsers className="text-danger fs-lg" />,
    children: [{
      id: '2.1',
      text: 'Add User',
      icon: <TbUserPlus className="text-success fs-lg" />
    }, {
      id: '2.2',
      text: 'Permissions',
      icon: <TbKey className="text-warning fs-lg" />
    }]
  }, {
    id: '3',
    text: 'Settings',
    icon: <TbSettings className="ti ti-settings text-muted fs-lg" />,
    defaultOpen: true,
    children: [{
      id: '3.1',
      text: 'General',
      icon: <TbUsersGroup className="text-primary fs-lg" />
    }, {
      id: '3.2',
      text: 'Security',
      icon: <TbLock className="text-danger fs-lg" />
    }, {
      id: '3.3',
      text: 'Notifications',
      icon: <TbBell className="text-warning fs-lg" />,
      checked: true
    }]
  }, {
    id: '4',
    text: 'Disabled Node',
    icon: <TbBan className="text-danger fs-lg" />
  }]
}, {
  id: '5',
  text: 'Archives',
  icon: <TbArchive className="text-warning fs-lg" />,
  children: [{
    id: '5.1',
    text: '2024',
    icon: <TbCalendarEvent className="text-primary fs-lg" />,
    checked: true
  }, {
    id: '5.2',
    text: '2023',
    icon: <TbCalendarEvent className="text-secondary fs-lg" />
  }, {
    id: '5.3',
    text: '2022',
    icon: <TbCalendarEvent className="text-success fs-lg" />
  }]
}, {
  id: '6',
  text: 'Media',
  icon: <TbPhoto className="text-info fs-lg" />,
  defaultOpen: true,
  children: [{
    id: '6.1',
    text: 'Videos',
    icon: <TbPlayerPlay className="text-danger fs-lg" />
  }, {
    id: '6.2',
    text: 'Audio',
    icon: <TbMusic className="text-success fs-lg" />
  }]
}];