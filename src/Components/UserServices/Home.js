import React, { useState, useEffect } from "react";
import MainBar from "./UserComponents/MainBar";
import SearchAppBarWithAdd from "./UserComponents/SearchAppBarWithAdd";
import SearchAppBar from "./UserComponents/Search";
import { getData, postData, ServerURL } from "../Services/NodeServices";

import SliderComponent from "./UserComponents/SliderComponent";
import SmallCardComponent from "./UserComponents/SmallCardComponent";
import ThreeCardComponent from "./UserComponents/ThreeCardComponent";
import TwoCardComponent from "./UserComponents/TwoCardComponent";
import OneCardComponent from "./UserComponents/OneCardComponent";
import HomeFooter from "./UserComponents/HomeFooter";

var bannersettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};



export default function Home() {

    const [banners, setBanners] = useState([])
    const [productsBySaleStatus, setProductsBySaleStatus] = useState([])
    const [threeProductsBySaleStatus, setThreeProductsBySaleStatus] = useState([])
    const [twoProductsBySaleStatus, setTwoProductsBySaleStatus] = useState([])
    const [bigImages, setBigImages] = useState([])


    const fetchThreeProducts = async (status) => {
        var body = { 'salestatus': status }
        var result = await postData('userinterface/display_all_products_salestatus', body)
        setThreeProductsBySaleStatus(result.data)
    }


    const fetchTwoProducts = async (status) => {
        var body = { 'salestatus': status }
        var result = await postData('userinterface/display_all_products_salestatus', body)
        setTwoProductsBySaleStatus(result.data)

    }


    const fetchProducts = async (status) => {
        var body = { 'salestatus': status }
        var result = await postData('userinterface/display_all_products_salestatus', body)
        setProductsBySaleStatus(result.data)

    }

    const fetchBigImagesForSubcategory = async (priority) => {
        var body = { priority: priority }
        var result = await postData('userinterface/display_all_subcategory_by_priority', body)
        setBigImages(result.data)

    }

    useEffect(function () {
        fetchBigImagesForSubcategory(1)
    }, [])

    useEffect(function () {
        fetchThreeProducts('Most Popular')
    }, [])

    useEffect(function () {
        fetchProducts('Trending')
    }, [])
    useEffect(function () {
        fetchTwoProducts('Best Sellings')
    }, [])

    const Heading = (props) => {
        return (
            <div style={{ width: '100wh', textAlign: 'center', fontSize: 22, letterSpacing: 1, fontWeight: 'bolder', margin: '50px 5px 5px 5px', color: props.color }}>
                {props.heading}
            </div>
        )
    }



    const fetchAllBanners = async () => {

        var result = await getData('userinterface/display_all_banners')

        var temp = JSON.parse(result.data.bannerpictures)

        setBanners(temp)



    }

    useEffect(function () {
        fetchAllBanners()
    }, [])

    return (<div>
        <SearchAppBar/>
        <MainBar />
        <SliderComponent images={banners} bannersettings={bannersettings} />
        <Heading heading="TRENDING" color='#000' />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}  >
            <div style={{ display: 'flex', width: '90%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
                <SmallCardComponent data={productsBySaleStatus} />
            </div>
        </div>

        <Heading heading="Best Sellings" color='#000' />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}  >
            <div style={{ display: 'flex', width: '90%', padding: 2, margin: 3, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
                <TwoCardComponent data={twoProductsBySaleStatus} />
            </div>
        </div>


        <Heading heading="MOST POPULAR" color='#000' />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}  >
            <div style={{ display: 'flex', width: '90%', padding: 2, margin: 3, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
                <ThreeCardComponent data={threeProductsBySaleStatus} />
            </div>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}  >
            <div style={{ display: 'flex', width: '90%', padding: 2, margin: 3, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
                <OneCardComponent data={bigImages} url={'productlist'}/>
            </div>
        </div>
        <div>
            <HomeFooter />
        </div>


    </div>)
}  