import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';

import BirthdayBuddyPage from './pages/basicProjects/BirthdayBuddy';
import ToursPage from './pages/basicProjects/Tours';
import ReviewsPage from './pages/basicProjects/Reviews';
import AccordionPage from './pages/basicProjects/Accordion';
import MenuPage from './pages/basicProjects/Menu';
import TabsPage from './pages/basicProjects/Tabs';

import SliderPage from './pages/advancedProjects/Slider';
import LoremIpsumPage from './pages/advancedProjects/LoremIpsum';
import ColorGeneratorPage from './pages/advancedProjects/ColorGenerator';
import GroceryBudPage from './pages/advancedProjects/GroceryBud';

const router = createBrowserRouter([
    { path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'birthdaybuddy', element: <BirthdayBuddyPage /> },
        { path: 'tours', element: <ToursPage /> },
        { path: 'reviews', element: <ReviewsPage /> },
        { path: 'accordion', element: <AccordionPage /> },
        { path: 'menu', element: <MenuPage /> },
        { path: 'tabs', element: <TabsPage /> },
        { path: 'slider', element: <SliderPage />},
        { path: 'loremipsum', element: <LoremIpsumPage /> },
        { path: 'colorgenerator', element: <ColorGeneratorPage /> },
        { path: 'grocerybud', element: <GroceryBudPage /> },
      ]
  }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
