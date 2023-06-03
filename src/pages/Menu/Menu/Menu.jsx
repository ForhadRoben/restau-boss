import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg';
import PopularItems from "../../Home/PopularItems/PopularItems";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Restau Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularItems></PopularItems>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularItems></PopularItems>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Menu;