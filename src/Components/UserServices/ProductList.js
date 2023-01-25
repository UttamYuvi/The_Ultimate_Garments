import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postData } from "../Services/NodeServices";
import { ServerURL } from "../Services/NodeServices";
import ProductDetailsComponent from "./UserComponents/ProductDetailsComponent";
import SearchAppBarWithAdd from "./UserComponents/SearchAppBarWithAdd";
import SearchAppBar from "./UserComponents/Search";
import MainBar from "./UserComponents/MainBar";
import HomeFooter from "./UserComponents/HomeFooter";
import FilterComponent from "./UserComponents/FilterComponent"
import { Grid } from "@mui/material";
import LocationComponent from "./UserComponents/LocationComponent";

export default function ProductList() {

    const { id, icon } = useParams()
    const [productList, setProductList] = useState([])

    const fetchProductsBySubcategory = async () => {
        var body = { subcategoryid: id }
        var result = await postData("userinterface/display_all_products_by_subcategory", body)
        setProductList(result.data)
    }

    useEffect(function () {
        fetchProductsBySubcategory() 
    }, [])

    return (
        <div>
            <SearchAppBar setProductList={setProductList}/>
            <MainBar />
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center'}} >
            <Grid item xs={12} >
                <LocationComponent/>
            </Grid>
            <Grid item xs={12} >
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 100,
                paddingRight: 100,
            }}
            >
                <div style={{ width: '100%', height: 'auto', marginBottom: 20, marginTop: 0 }}>

                    <img src={`${ServerURL}/images/${icon}`} style={{ width: '100%', height: 250 }} />


                </div>

            </div>
            </Grid>
            


                <Grid item xs={3}  >
                    <div
                        style={{
                            display: "flex", 
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <FilterComponent setProductList={setProductList} />
                    </div>
                </Grid>

                <Grid item xs={9}   >
                    <div
                        style={{
                            display: "flex", 
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ProductDetailsComponent data={productList} />
                    </div>
                </Grid>
            </Grid>
            <HomeFooter />

        </div>
    )
}