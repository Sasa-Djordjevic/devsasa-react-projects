const url = 'https://devsasa-react-projects.netlify.app';

// basic projects icons
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { TbMapSearch } from 'react-icons/tb';
import { MdOutlineReviews } from 'react-icons/md';
import { TfiLayoutAccordionSeparated } from 'react-icons/tfi';
import { BsMenuButton } from 'react-icons/bs';
import { PiTableDuotone } from 'react-icons/pi';
// advanced projects icons
import { TfiLayoutSlider } from 'react-icons/tfi';
import { CiTextAlignCenter } from 'react-icons/ci';
import { MdOutlineColorLens } from 'react-icons/md'; 
import { FiShoppingBag } from 'react-icons/fi';

export const title = {
    url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
    giturl: 'https://github.com/Sasa-Djordjevic/devsasa-react-projects.git'
};

export const title1 = 'My collection of interesting projects from the course React 18 Tutorial and Projects. Feel free to follow the links and explore the projects.';

export const basicProjects = [
    {
        id: 1,
        name: 'Birthday Buddy',
        icon: <LiaBirthdayCakeSolid />,
        url: url + '/birthdaybuddy',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 2,
        name: 'Tours App',
        icon: <TbMapSearch />,
        url: url + '/tours',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 3,
        name: 'Reviews App',
        icon: <MdOutlineReviews />,
        url: url + '/reviews',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 4,
        name: 'Accordion App',
        icon: <TfiLayoutAccordionSeparated />,
        url: url + '/accordion',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 5,
        name: 'Menu App',
        icon: <BsMenuButton />,
        url: url + '/menu',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 6,
        name: 'Tabs App',
        icon: <PiTableDuotone />,
        url: url + '/tabs',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },
];

export const advancedProjects = [
    {
        id: 1,
        name: 'Slider App',
        icon: <TfiLayoutSlider />,
        url: url + '/slider',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 2,
        name: 'Lorem Ipsum App',
        icon: <CiTextAlignCenter />,
        url: url + '/loremipsum',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 3,
        name: 'Color Generator',
        icon: <MdOutlineColorLens />,
        url: url + '/colorgenerator',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },

    {
        id: 4,
        name: 'Grocery Bud',
        icon: <FiShoppingBag />,
        url: url + '/grocerybud',
        giturl: 'https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main'
    },
];

