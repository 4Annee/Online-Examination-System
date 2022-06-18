import HOME from '../assets/home.png'
import EXAM from '../assets/exam.png'
import RESULTS from '../assets/results.png'
import DRAFTS from '../assets/drafts.png'
import SETTINGS from '../assets/settings.png'

export const NavbarData = [
    {
        icon: HOME,
        heading: 'Dashboard',
        link: '/teacher'
    },
    {
        icon: EXAM,
        heading: 'Exams',
        link: '/viewExams'
    },
    {
        icon: RESULTS,
        heading: 'Results',
        link: '/resultsTeacher'
    },
    {
        icon: DRAFTS,
        heading: 'Drafts',
        link: '/drafts'
    },
    {
        icon: SETTINGS,
        heading: 'Settings',
        link: '/settingsTeacher'
    },
];