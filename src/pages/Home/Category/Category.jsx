// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle heading={'Order Online'}
                subHeading={"From 11.00am to 10.00pm"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-8"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className="uppercase text-center text-red-600 font-serif text-3xl -mt-16 ">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="uppercase text-center text-red-600 font-serif text-3xl -mt-16 ">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="uppercase text-center text-red-600 font-serif text-3xl -mt-16 ">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="uppercase text-center text-red-600 font-serif text-3xl -mt-16 ">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className="uppercase text-center text-red-600 font-serif text-3xl -mt-16 ">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;