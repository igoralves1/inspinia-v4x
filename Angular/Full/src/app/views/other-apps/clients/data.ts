type ClientType = {
    name: string;
    email: string;
    avatar: string;
    phone: string;
    countryName: string;
    flag: string;
    enrollDate: string;
    type: string;
    title: string;
    status: "active" | "inactive" | "pending"
}

export const clients: ClientType[] = [
    {
        name: 'Emily Parker',
        email: 'emily@startupwave.io',
        avatar: 'assets/images/users/user-7.jpg',
        phone: '+1 (415) 992-3412',
        countryName:  'US' ,
        flag: 'assets/images/flags/us.svg',
        enrollDate: 'Feb 2, 2024',
        type: 'Project',
        title: 'Frontend Developer',
        status: 'active'
    },
    {
        name: 'Liam Scott',
        email: 'liam@creativelogic.net',
        avatar: 'assets/images/users/user-3.jpg',
        phone: '+44 20 7946 0958',
        countryName:  'UK',
        flag: 'assets/images/flags/gb.svg',
        enrollDate: 'Jan 15, 2024',
        type: 'Contract',
        title: 'UI/UX Designer',
        status: 'pending'
    },
    {
        name: 'Sofia Müller',
        email: 'sofia@designhub.de',
        avatar: 'assets/images/users/user-4.jpg',
        phone: '+49 89 1234 5678',
        countryName:  'DE',
        flag: 'assets/images/flags/de.svg',
        enrollDate: 'Mar 12, 2024',
        type: 'Project',
        title: 'Visual Designer',
        status: 'active'
    },
    {
        name: 'Carlos Méndez',
        email: 'carlos@techlaunch.mx',
        avatar: 'assets/images/users/user-5.jpg',
        phone: '+52 55 1234 9876',
        countryName:  'MX',
        flag: 'assets/images/flags/mx.svg',
        enrollDate: 'Jan 8, 2024',
        type: 'Contract',
        title: 'Full Stack Developer',
        status: 'inactive'
    },
    {
        name: 'Nina Patel',
        email: 'nina@pixelhype.in',
        avatar: 'assets/images/users/user-6.jpg',
        phone: '+91 99876 54321',
        countryName:  'IN',
        flag: 'assets/images/flags/in.svg',
        enrollDate: 'Feb 19, 2024',
        type: 'Project',
        title: 'Brand Strategist',
        status: 'active'
    },
    {
        name: 'Oliver Chen',
        email: 'oliver@brandflow.sg',
        avatar: 'assets/images/users/user-8.jpg',
        phone: '+65 6789 1234',
        countryName:  'SG',
        flag: 'assets/images/flags/sg.svg',
        enrollDate: 'Jan 30, 2024',
        type: 'Retainer',
        title: 'Creative Director',
        status: 'pending'
    },
    {
        name: 'Maya Tanaka',
        email: 'maya@visiontokyo.jp',
        avatar: 'assets/images/users/user-9.jpg',
        phone: '+81 3 1234 5678',
        countryName:  'JP',
        flag: 'assets/images/flags/jp.svg',
        enrollDate: 'Mar 5, 2024',
        type: 'Project',
        title: 'Product Designer',
        status: 'active'
    },
    {
        name: 'Lucas Ferreira',
        email: 'lucas@devstudio.br',
        avatar: 'assets/images/users/user-10.jpg',
        phone: '+55 11 99876 5432',
        countryName:  'BR',
        flag: 'assets/images/flags/br.svg',
        enrollDate: 'Feb 24, 2024',
        type: 'Contract',
        title: 'Backend Engineer',
        status: 'active'
    },
    {
        name: 'Anna Schmidt',
        email: 'anna@uxhaus.de',
        avatar: 'assets/images/users/user-1.jpg',
        phone: '+49 30 4567 8910',
        countryName:  'DE',
        flag: 'assets/images/flags/de.svg',
        enrollDate: 'Mar 9, 2024',
        type: 'Retainer',
        title: 'UX Consultant',
        status: 'pending'
    },
    {
        name: 'Jason Lee',
        email: 'jason@webfoundry.au',
        avatar: 'assets/images/users/user-2.jpg',
        phone: '+61 2 9876 1234',
        countryName:  'AU',
        flag: 'assets/images/flags/au.svg',
        enrollDate: 'Mar 14, 2024',
        type: 'Contract',
        title: 'Web Developer',
        status: 'active'
    }
]
