import {Injectable} from '@angular/core';
import {ChatUserType, MessageType} from '@/app/views/apps/chat/types';

@Injectable({providedIn: 'root'})
export class ChatService {
    users: ChatUserType[] = [
        {
            id: "chat1",
            name: "Ava Thompson",
            avatar: "assets/images/users/user-4.jpg",
            lastMessage: "I'll send the invoice by evening. Please check and confirm.",
            time: "Just Now",
            unread: 2
        },
        {
            id: "chat2",
            name: "Noah Smith",
            avatar: "assets/images/users/user-5.jpg",
            lastMessage: "Can you check the shared doc? Added some feedback.",
            time: "5 Min",
            unread: 1
        },
        {
            id: "chat3",
            name: "Liam Johnson",
            avatar: "assets/images/users/user-7.jpg",
            lastMessage: "Please approve the design so we can move to development.",
            time: "3:45 PM",
            unread: 0
        },
        {
            id: "chat4",
            name: "Emma Wilson",
            lastMessage: "All tasks are completed. Do you want me to deploy?",
            time: "2 hr",
            unread: 0
        },
        {
            id: "chat5",
            name: "Olivia Martinez",
            avatar: "assets/images/users/user-8.jpg",
            lastMessage: "Meeting rescheduled to Friday at 11 AM.",
            time: "4 hr",
            unread: 0
        },
        {
            id: "chat6",
            name: "William Davis",
            lastMessage: "I'm working on the bug fix, will update soon.",
            time: "Yesterday",
            unread: 3
        },
        {
            id: "chat7",
            name: "Sophia Moore",
            avatar: "assets/images/users/user-10.jpg",
            lastMessage: "Final draft is ready. Let me know your thoughts.",
            time: "Yesterday",
            unread: 0
        },
        {
            id: "chat8",
            name: "Jackson Lee",
            avatar: "assets/images/users/user-2.jpg",
            lastMessage: "I've uploaded the assets. Please review them tonight.",
            time: "12 Jun",
            unread: 0
        },
        {
            id: "chat9",
            name: "Chloe Anderson",
            avatar: "assets/images/users/user-3.jpg",
            lastMessage: "Need your approval before pushing this live.",
            time: "10 Jun",
            unread: 0
        },
        {
            id: "chat10",
            name: "Lucas Wright",
            lastMessage: "Client call moved to tomorrow. Will share notes later.",
            time: "9 May",
            unread: 0
        },
        {
            id: "chat11",
            name: "Mia Scott",
            avatar: "assets/images/users/user-6.jpg",
            lastMessage: "Everything looks good. Waiting for your go-ahead.",
            time: "13 Apr",
            unread: 0
        },
        {
            id: "chat12",
            name: "Benjamin Clark",
            avatar: "assets/images/users/user-9.jpg",
            lastMessage: "Checked your updates. Left a few suggestions.",
            time: "10 Mar",
            unread: 2
        }
    ]


    userChat: MessageType[] = [
        {from: 'them', content: 'Hey! Are you available for a quick call? 📞', time: '08:55 am'},
        {from: 'me', content: 'Sure, give me 5 minutes. Just wrapping something up.', time: '08:57 am'},
        {from: 'them', content: 'Perfect. Let me know when you\'re ready 👍', time: '8:58 am'},
        {from: 'me', content: 'Ready now. Calling you!', time: '9:00 am'},
        {from: 'them', content: 'Thanks for your time earlier!', time: '9:45 am'},
        {from: 'me', content: 'Of course! It was a productive discussion.', time: '9:46 am'},
        {from: 'them', content: 'I’ll send over the updated files by noon.', time: '9:50 am'},
        {from: 'me', content: 'Great, I’ll review them once they arrive.', time: '9:52 am'},
        {
            from: 'them',
            content: 'Just sent them via Drive. Let me know if you have issues accessing.',
            time: '12:03 pm'
        },
        {from: 'me', content: 'Got them. Everything looks good so far!', time: '12:10 pm'},
        {from: 'them', content: 'Awesome 😊 Looking forward to your feedback!', time: '12:12 pm'},
        {from: 'me', content: 'Will get back to you after lunch 🍴', time: '12:13 pm'},
        {from: 'them', content: 'No rush, enjoy your lunch! 😄', time: '12:14 pm'},
        {from: 'me', content: 'Thanks! Talk soon.', time: '12:15 pm'},
    ]

    messages: { [chatId: string]: MessageType[] } = {
        chat1: this.userChat,
        chat2: this.userChat,
        chat3: this.userChat,
        chat4: this.userChat,
        chat5: this.userChat,
        chat6: this.userChat,
        chat7: this.userChat,
        chat8: this.userChat,
        chat9: this.userChat,
        chat10: this.userChat,
        chat11: this.userChat,
        chat12: this.userChat,
    };

    constructor() {
        for (const user of this.users) {
            this.messages[user.id] = [...this.userChat]; // clone the array to prevent shared reference
        }
    }

    getUsers(): ChatUserType[] {
        return this.users;
    }

    getMessages(chatId: string): MessageType[] {
        return this.messages[chatId] || [];
    }

    sendMessage(chatId: string, content: string) {
        const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        this.messages[chatId] = this.messages[chatId] || [];
        this.messages[chatId].push({from: 'me', content, time: now});

            const replyTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            this.messages[chatId].push({
                from: 'them',
                content: this.generateAutoReply(content),
                time: replyTime
            });
    }

    private generateAutoReply(message: string): string {
        if (message.toLowerCase().includes('hello')) {
            return "Hi there! 👋 How can I help?";
        } else if (message.toLowerCase().includes('thanks')) {
            return "You're welcome! 😊";
        } else {
            return "Got it! I'll get back to you shortly.";
        }
    }

}
