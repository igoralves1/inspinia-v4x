import user1 from '@/assets/images/users/user-1.jpg';
import user10 from '@/assets/images/users/user-10.jpg';
import user2 from '@/assets/images/users/user-2.jpg';
import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
import user6 from '@/assets/images/users/user-6.jpg';
import user7 from '@/assets/images/users/user-7.jpg';
import user8 from '@/assets/images/users/user-8.jpg';
import user9 from '@/assets/images/users/user-9.jpg';
import { getColor } from '@/helpers/color';
export const data1 = {
  id: 'Lucas_Alex',
  data: {
    name: 'Lucas Alex',
    imageURL: user1
  },
  options: {
    nodeBGColor: getColor('primary-rgb', 0.5)
  },
  children: [{
    id: 'Alex_Lee',
    data: {
      name: 'Alex Lee',
      imageURL: user3
    },
    options: {
      nodeBGColor: getColor('danger-rgb', 0.5)
    },
    children: [{
      id: 'Mia_Patel',
      data: {
        name: 'Mia Patel',
        imageURL: user9
      },
      options: {
        nodeBGColor: getColor('info-rgb', 0.5)
      }
    }, {
      id: 'Ryan_Clark',
      data: {
        name: 'Ryan Clark',
        imageURL: user10
      },
      options: {
        nodeBGColor: getColor('info-rgb', 0.5)
      }
    }, {
      id: 'Zoe_Wang',
      data: {
        name: 'Zoe Wang',
        imageURL: user2
      },
      options: {
        nodeBGColor: getColor('info-rgb', 0.5)
      }
    }]
  }, {
    id: 'Leo_Kim',
    data: {
      name: 'Leo Kim',
      imageURL: user6
    },
    options: {
      nodeBGColor: getColor('danger-rgb', 0.5)
    },
    children: [{
      id: 'Ava_Jones',
      data: {
        name: 'Ava Jones',
        imageURL: user3
      },
      options: {
        nodeBGColor: getColor('purple-rgb', 0.5)
      }
    }, {
      id: 'Maya_Gupta',
      data: {
        name: 'Maya Gupta',
        imageURL: user7
      },
      options: {
        nodeBGColor: getColor('purple-rgb', 0.5)
      }
    }]
  }, {
    id: 'Lily_Chen',
    data: {
      name: 'Lily Chen',
      imageURL: user4
    },
    options: {
      nodeBGColor: getColor('danger-rgb', 0.5)
    },
    children: [{
      id: 'Jake_Scott',
      data: {
        name: 'Jake Scott',
        imageURL: user3
      },
      options: {
        nodeBGColor: getColor('secondary-rgb', 0.5)
      }
    }]
  }, {
    id: 'Max_Ruiz',
    data: {
      name: 'Max Ruiz',
      imageURL: user8
    },
    options: {
      nodeBGColor: getColor('danger-rgb', 0.5)
    }
  }]
};
export const data2 = {
  id: 'ms',
  data: {
    imageURL: user1,
    name: 'Margret Swanson'
  },
  options: {
    nodeBGColor: getColor('primary-rgb', 0.5),
    nodeBGColorHover: getColor('primary-rgb', 0.7)
  },
  children: [{
    id: 'mh',
    data: {
      imageURL: user3,
      name: 'Mark Hudson'
    },
    options: {
      nodeBGColor: getColor('danger-rgb', 0.5),
      nodeBGColorHover: getColor('danger-rgb', 0.7)
    },
    children: [{
      id: 'kb',
      data: {
        imageURL: user2,
        name: 'Karyn Borbas'
      },
      options: {
        nodeBGColor: getColor('info-rgb', 0.5),
        nodeBGColorHover: getColor('info-rgb', 0.7)
      }
    }, {
      id: 'cr',
      data: {
        imageURL: user9,
        name: 'Chris Rup'
      },
      options: {
        nodeBGColor: getColor('purple-rgb', 0.5),
        nodeBGColorHover: getColor('purple-rgb', 0.7)
      }
    }]
  }, {
    id: 'cs',
    data: {
      imageURL: user7,
      name: 'Chris Lysek'
    },
    options: {
      nodeBGColor: getColor('secondary-rgb', 0.5),
      nodeBGColorHover: getColor('secondary-rgb', 0.7)
    },
    children: [{
      id: 'Noah_Chandler',
      data: {
        imageURL: user6,
        name: 'Noah Chandler'
      },
      options: {
        nodeBGColor: getColor('info', 0.5),
        nodeBGColorHover: getColor('info', 0.7)
      }
    }, {
      id: 'Felix_Wagner',
      data: {
        imageURL: user4,
        name: 'Felix Wagner'
      },
      options: {
        nodeBGColor: getColor('success-rgb', 0.5),
        nodeBGColorHover: getColor('success-rgb', 0.7)
      }
    }]
  }]
};