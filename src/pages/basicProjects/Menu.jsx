import React, {useState} from "react";

import Title from '../../components/menu/Title';
import Buttons from '../../components/menu/Buttons';
import MenuList from '../../components/menu/MenuList';

import menu from '../../assets/data/menu';

const MenuPage = () => {
  const [menuData, setMenuData] = useState(menu);

  const categories = menu.map(item => item.category);

  // --unique values from the array with Set()
  //const uniqueCategories = new Set(categories);

  // --unique values from the array with filter()
  const uniqueCategories = categories.filter( (value, index, arr) => arr.indexOf(value) === index);

  const allCategories = ['all', ...uniqueCategories];

  const changeMenuData = (selectedCategory) => {
    if (selectedCategory === 'all') {
      return setMenuData(menu);
    }

    const changedMenu = menu.filter( (item) => item.category === selectedCategory);

    setMenuData(changedMenu);
  };

  return (
      <section>
        <Title />
        <Buttons categories={allCategories} categoryHandler={changeMenuData}/>
        <MenuList data={menuData} />
      </section>
  );
};
export default MenuPage;
