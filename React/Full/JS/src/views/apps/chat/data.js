import user10 from '@/assets/images/users/user-10.jpg';
import user2 from '@/assets/images/users/user-2.jpg';
import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
import user5 from '@/assets/images/users/user-5.jpg';
import user6 from '@/assets/images/users/user-6.jpg';
import user7 from '@/assets/images/users/user-7.jpg';
import user8 from '@/assets/images/users/user-8.jpg';
import user9 from '@/assets/images/users/user-9.jpg';
export const currentUser = {
  id: 'u0',
  name: 'John Doe',
  avatar: user2,
  isOnline: true
};
export const contacts = [{
  id: 'u1',
  name: 'Ava Thompson',
  avatar: user4,
  lastMessage: "I'll send the invoice by evening. Please check and confirm.",
  timestamp: 'Just Now',
  unreadMessages: 2,
  isOnline: false
}, {
  id: 'u2',
  name: 'Noah Smith',
  avatar: user5,
  lastMessage: 'Can you check the shared doc? Added some feedback.',
  timestamp: '5 Min',
  unreadMessages: 1,
  isOnline: true
}, {
  id: 'u3',
  name: 'Liam Johnson',
  avatar: user7,
  lastMessage: 'Please approve the design so we can move to development.',
  timestamp: '3:45 PM',
  isOnline: false
}, {
  id: 'u4',
  name: 'Emma Wilson',
  lastMessage: 'All tasks are completed. Do you want me to deploy?',
  timestamp: '2 hr',
  isOnline: true
}, {
  id: 'u5',
  name: 'Olivia Martinez',
  avatar: user8,
  lastMessage: 'Meeting rescheduled to Friday at 11 AM.',
  timestamp: '4 hr',
  isOnline: false
}, {
  id: 'u6',
  name: 'William Davis',
  lastMessage: "I'm working on the bug fix, will update soon.",
  timestamp: 'Yesterday',
  unreadMessages: 3,
  isOnline: true
}, {
  id: 'u7',
  name: 'Sophia Moore',
  avatar: user10,
  lastMessage: 'Final draft is ready. Let me know your thoughts.',
  timestamp: 'Yesterday',
  isOnline: false
}, {
  id: 'u8',
  name: 'Jackson Lee',
  avatar: user2,
  lastMessage: "I've uploaded the assets. Please review them tonight.",
  timestamp: '12 Jun',
  isOnline: true
}, {
  id: 'u9',
  name: 'Chloe Anderson',
  avatar: user3,
  lastMessage: 'Need your approval before pushing this live.',
  timestamp: '10 Jun',
  isOnline: false
}, {
  id: 'u10',
  name: 'Lucas Wright',
  lastMessage: 'Client call moved to tomorrow. Will share notes later.',
  timestamp: '9 May',
  isOnline: false
}, {
  id: 'u11',
  name: 'Mia Scott',
  avatar: user6,
  lastMessage: 'Everything looks good. Waiting for your go-ahead.',
  timestamp: '13 Apr',
  isOnline: false
}, {
  id: 'u12',
  name: 'Benjamin Clark',
  avatar: user9,
  lastMessage: 'Checked your updates. Left a few suggestions.',
  timestamp: '10 Mar',
  unreadMessages: 2,
  isOnline: false
}];
export const messageThreads = [{
  id: 't1',
  participants: [contacts[0], currentUser],
  messages: [{
    id: 'm1',
    senderId: contacts[0].id,
    text: 'Hey! Are you available for a quick call? 📞',
    time: '08:55 am'
  }, {
    id: 'm2',
    senderId: currentUser.id,
    text: 'Sure, give me 5 minutes. Just wrapping something up.',
    time: '08:57 am'
  }, {
    id: 'm3',
    senderId: contacts[0].id,
    text: "Perfect. Let me know when you're ready 👍",
    time: '08:58 am'
  }, {
    id: 'm4',
    senderId: currentUser.id,
    text: 'Ready now. Calling you!',
    time: '09:00 am'
  }, {
    id: 'm5',
    senderId: contacts[0].id,
    text: 'Thanks for your time earlier!',
    time: '09:45 am'
  }, {
    id: 'm6',
    senderId: currentUser.id,
    text: 'Of course! It was a productive discussion.',
    time: '09:46 am'
  }, {
    id: 'm7',
    senderId: contacts[0].id,
    text: 'I’ll send over the updated files by noon.',
    time: '09:50 am'
  }, {
    id: 'm8',
    senderId: currentUser.id,
    text: 'Great, I’ll review them once they arrive.',
    time: '09:52 am'
  }, {
    id: 'm9',
    senderId: contacts[0].id,
    text: 'Just sent them via Drive. Let me know if you have issues accessing.',
    time: '12:03 pm'
  }, {
    id: 'm10',
    senderId: currentUser.id,
    text: 'Got them. Everything looks good so far!',
    time: '12:10 pm'
  }, {
    id: 'm11',
    senderId: contacts[0].id,
    text: 'Awesome 😊 Looking forward to your feedback!',
    time: '12:12 pm'
  }, {
    id: 'm12',
    senderId: currentUser.id,
    text: 'Will get back to you after lunch 🍴',
    time: '12:13 pm'
  }, {
    id: 'm13',
    senderId: contacts[0].id,
    text: 'No rush, enjoy your lunch! 😄',
    time: '12:14 pm'
  }, {
    id: 'm14',
    senderId: currentUser.id,
    text: 'Thanks! Talk soon.',
    time: '12:15 pm'
  }]
}, {
  id: 't2',
  participants: [contacts[1], currentUser],
  messages: [{
    id: 'm15',
    senderId: contacts[1].id,
    text: 'Hey! Are you available for a quick call? 📞',
    time: '08:55 am'
  }, {
    id: 'm16',
    senderId: currentUser.id,
    text: 'Sure, give me 5 minutes. Just wrapping something up.',
    time: '08:57 am'
  }, {
    id: 'm17',
    senderId: contacts[1].id,
    text: 'Hey, quick question—did you check the latest design mockups?',
    time: '10:05 am'
  }, {
    id: 'm18',
    senderId: currentUser.id,
    text: 'Not yet, just logging in now. Want me to prioritize that?',
    time: '10:06 am'
  }, {
    id: 'm19',
    senderId: contacts[1].id,
    text: 'Yes please. I need your feedback before the client review at noon.',
    time: '10:07 am'
  }, {
    id: 'm20',
    senderId: currentUser.id,
    text: 'Got it. I’ll go through them and send notes in a bit.',
    time: '10:08 am'
  }, {
    id: 'm21',
    senderId: contacts[1].id,
    text: 'Thanks a ton!',
    time: '10:08 am'
  }, {
    id: 'm22',
    senderId: currentUser.id,
    text: 'First impression: very clean. Minor spacing issues though.',
    time: '10:20 am'
  }, {
    id: 'm23',
    senderId: contacts[1].id,
    text: 'Noted. Fixing those now.',
    time: '10:21 am'
  }, {
    id: 'm24',
    senderId: currentUser.id,
    text: 'Sent detailed feedback via email too 📬',
    time: '10:25 am'
  }, {
    id: 'm25',
    senderId: contacts[1].id,
    text: 'Got it. Appreciate the quick turnaround!',
    time: '10:26 am'
  }]
}, {
  id: 't3',
  participants: [contacts[2], currentUser],
  messages: [{
    id: 'm26',
    senderId: contacts[2].id,
    text: 'Morning! Did you update the backend endpoints yet?',
    time: '09:15 am'
  }, {
    id: 'm27',
    senderId: currentUser.id,
    text: 'Morning! Just pushed the changes to dev branch.',
    time: '09:16 am'
  }, {
    id: 'm28',
    senderId: contacts[2].id,
    text: 'Awesome, I’ll pull and test on my side.',
    time: '09:17 am'
  }, {
    id: 'm29',
    senderId: currentUser.id,
    text: 'Let me know if anything breaks ⚠️',
    time: '09:18 am'
  }, {
    id: 'm30',
    senderId: contacts[2].id,
    text: 'Looks good so far. Just one CORS error.',
    time: '09:20 am'
  }, {
    id: 'm31',
    senderId: currentUser.id,
    text: 'Ah, forgot the whitelist entry. Fixing now.',
    time: '09:21 am'
  }, {
    id: 'm32',
    senderId: contacts[2].id,
    text: "Reloaded… and it's working. All green ✅",
    time: '09:23 am'
  }, {
    id: 'm33',
    senderId: currentUser.id,
    text: 'Nice! That wraps our side for this sprint then?',
    time: '09:24 am'
  }, {
    id: 'm34',
    senderId: contacts[2].id,
    text: 'Yep. Good work 💪',
    time: '09:25 am'
  }]
}, {
  id: 't4',
  participants: [contacts[3], currentUser],
  messages: [{
    id: 'm35',
    senderId: contacts[3].id,
    text: 'Please verify if the new changes reflect correctly.',
    time: '10:15 am'
  }, {
    id: 'm36',
    senderId: currentUser.id,
    text: 'Yes, they’re showing now. Looks good.',
    time: '10:22 am'
  }, {
    id: 'm37',
    senderId: contacts[3].id,
    text: 'Cool. I’ll push to staging then.',
    time: '10:30 am'
  }]
}, {
  id: 't5',
  participants: [contacts[4], currentUser],
  messages: [{
    id: 'm38',
    senderId: contacts[4].id,
    text: 'Want to sync on the timeline tomorrow morning?',
    time: '11:00 am'
  }, {
    id: 'm39',
    senderId: currentUser.id,
    text: 'Yes, let’s do 10:30 AM.',
    time: '11:02 am'
  }, {
    id: 'm40',
    senderId: contacts[4].id,
    text: 'Perfect, see you then.',
    time: '11:03 am'
  }]
}, {
  id: 't6',
  participants: [contacts[5], currentUser],
  messages: [{
    id: 'm41',
    senderId: contacts[5].id,
    text: 'I’ll create a ticket for the API timeout issue.',
    time: '11:30 am'
  }, {
    id: 'm42',
    senderId: currentUser.id,
    text: 'Great, assign it to me once ready.',
    time: '11:35 am'
  }, {
    id: 'm43',
    senderId: contacts[5].id,
    text: 'Done. Ticket #4582.',
    time: '11:38 am'
  }]
}, {
  id: 't7',
  participants: [contacts[6], currentUser],
  messages: [{
    id: 'm44',
    senderId: contacts[6].id,
    text: 'We need to revise the Figma design per feedback.',
    time: '12:15 pm'
  }, {
    id: 'm45',
    senderId: currentUser.id,
    text: 'I’ll start on that after lunch.',
    time: '12:18 pm'
  }, {
    id: 'm46',
    senderId: contacts[6].id,
    text: 'Cool. I’ll update the Jira board.',
    time: '12:20 pm'
  }]
}, {
  id: 't8',
  participants: [contacts[7], currentUser],
  messages: [{
    id: 'm47',
    senderId: contacts[7].id,
    text: 'Make sure to sanitize the inputs in that form.',
    time: '01:05 pm'
  }, {
    id: 'm48',
    senderId: currentUser.id,
    text: 'Yup, I’ll add validations today.',
    time: '01:06 pm'
  }, {
    id: 'm49',
    senderId: contacts[7].id,
    text: 'Awesome. Thanks!',
    time: '01:07 pm'
  }]
}, {
  id: 't9',
  participants: [contacts[8], currentUser],
  messages: [{
    id: 'm50',
    senderId: contacts[8].id,
    text: 'Can you send the report again? The link was broken.',
    time: '02:05 pm'
  }, {
    id: 'm51',
    senderId: currentUser.id,
    text: 'Sure, just sent it on email.',
    time: '02:07 pm'
  }, {
    id: 'm52',
    senderId: contacts[8].id,
    text: 'Got it. All good now.',
    time: '02:10 pm'
  }]
}, {
  id: 't10',
  participants: [contacts[9], currentUser],
  messages: [{
    id: 'm53',
    senderId: contacts[9].id,
    text: 'Just pushed a patch to fix that edge case.',
    time: '03:00 pm'
  }, {
    id: 'm54',
    senderId: currentUser.id,
    text: 'Reviewing now. Will merge if it passes tests.',
    time: '03:05 pm'
  }, {
    id: 'm55',
    senderId: contacts[9].id,
    text: 'Thanks!',
    time: '03:06 pm'
  }]
}, {
  id: 't11',
  participants: [contacts[10], currentUser],
  messages: [{
    id: 'm56',
    senderId: contacts[10].id,
    text: 'Confirmed with the client. No changes needed now.',
    time: '03:45 pm'
  }, {
    id: 'm57',
    senderId: currentUser.id,
    text: 'That’s good news!',
    time: '03:47 pm'
  }, {
    id: 'm58',
    senderId: contacts[10].id,
    text: 'Indeed 😄',
    time: '03:48 pm'
  }]
}, {
  id: 't12',
  participants: [contacts[11], currentUser],
  messages: [{
    id: 'm59',
    senderId: contacts[11].id,
    text: 'Did you see the update on the dashboard issue?',
    time: '04:20 pm'
  }, {
    id: 'm60',
    senderId: currentUser.id,
    text: 'Yes, I’ll pull and test now.',
    time: '04:22 pm'
  }, {
    id: 'm61',
    senderId: contacts[11].id,
    text: 'Let me know if anything breaks.',
    time: '04:25 pm'
  }]
}];