import {WizardStepType} from '@/app/views/forms/wizards/types';

export const wizardSteps: WizardStepType[] = [
    {
        id: 'stuInfo',
        icon: 'tablerUserCircle',
        title: 'Student Info',
        subtitle: 'Personal details'
    },
    {
        id: 'addrInfo',
        icon: 'tablerMapPin',
        title: 'Address Info',
        subtitle: 'Where you live'
    },
    {
        id: 'courseInfo',
        icon: 'tablerBook',
        title: 'Course Info',
        subtitle: 'Select your course'
    },
    {
        id: 'parentInfo',
        icon: 'tablerUsers',
        title: 'Parent Info',
        subtitle: 'Guardian details'
    },
    {
        id: 'documents',
        icon: 'tablerFolder',
        title: 'Documents',
        subtitle: 'Upload certificates'
    }
];
