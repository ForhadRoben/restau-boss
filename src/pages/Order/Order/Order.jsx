import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    // console.log(category);

    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>
                    Restau boss | Order Food
                </title>
            </Helmet>
            <Cover img={orderImg} title={'Order Food'}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) =>
                setTabIndex(index)
            }>
                <TabList className="text-center my-4">
                    <div className="bg-red-200 bg-opacity-20 py-4">
                        <Tab >Salad</Tab>
                        <Tab >Pizza</Tab>
                        <Tab >Soups</Tab>
                        <Tab >Desserts</Tab>
                        <Tab >Drinks</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;