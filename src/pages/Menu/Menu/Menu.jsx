import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImg from '../../../assets/menu/menu-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>
                    Restau Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} img={dessertImg} title='dessert'></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title='pizza'></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title='salad'></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title='soup'></MenuCategory>


        </div>
    );
};

export default Menu;