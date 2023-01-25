import React,{createRef, useState} from "react";
import { Grid } from "@mui/material";
import SearchAppBar from "./UserComponents/Search";
import MainBar from "./UserComponents/MainBar";
import ProductImageSlider from "./UserComponents/ProductImageSlider";
import LocationComponent from "./UserComponents/LocationComponent";
import ProductDetailsFilling from "./UserComponents/ProductDetailsFilling";
import ProductDetailsSubComponent from "./UserComponents/ProductDetailsSubComponent";
import RatingAndReviews from "./UserComponents/RatingAndReviews";
import HomeFooter from "./UserComponents/HomeFooter";
import { useLocation,useNavigate } from "react-router-dom";


export default function ProductDetails(props) {

    const [refresh, setRefresh]= useState(false)
    

    var location=useLocation()
    var product = location.state.product
    var productid=JSON.parse(product).productid
    
    const updateCart=()=>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SearchAppBar />
                    <MainBar />
                </Grid>
                <Grid item xs={12} >
                    <LocationComponent />
                </Grid>

                <Grid item xs={6}>
                    <ProductImageSlider productid={productid} />
                </Grid>
                <Grid item xs={6} style={{padding:0,margin:0}}>
                    <ProductDetailsFilling updateCart={updateCart} productInfo={product} />
                </Grid>
                <Grid item xs={12} style={{marginLeft:'70px'}} >
                   <ProductDetailsSubComponent/>
                </Grid>
                <Grid item xs={12} style={{marginLeft:'70px'}} >
                   <RatingAndReviews/>
                </Grid>
                <Grid item xs={12} >
                    <HomeFooter/>
                </Grid>
            </Grid>

        </div>
    )
}