// import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularItems = () => {

    const [menu] = useMenu();
    console.log(menu);
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // // console.log(menu);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular');
    //             setMenu(popularItem);
    //             // console.log(popularItem);
    //         })
    // }, [])
    return (
        <section>
            <SectionTitle
                heading='From our menu'
                subHeading='check it out'></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mb-12">
                {
                    popular.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}></MenuItem>
                    )
                }

            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularItems;