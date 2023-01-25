import * as React from 'react';
import AdminAppBar from './AdminAppBar';
import Sidelist from './SideList';
import { Routes, Route } from "react-router-dom"

//routers
import DisplayAllCategories from "./DisplayAllCategories";
import Category from "./Category";
import SubCategory from "./SubCategory";
import DisplayAllSubCategories from "./DisplayAllSubCategories";
import Product from "./Product";
import DisplayAllProducts from "./DisplayAllProducts";
import Color from "./Color";
import Size from "./Size";
import DisplayAllSize from "./DisplayAllSize";
import DisplayAllColor from "./DisplayAllColor";
import BannerImages from './BannerImages';
import DisplayAllBanners from './DisplayAllBanner';
import ProductImages from './ProductImages';


export default function Dashboard() {
    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AdminAppBar />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                    <Sidelist />
                </div>
                <div style={{ width: '80%' }}>
                    <Routes>
                        <Route element={<DisplayAllCategories />} path="displayallcategories" />
                        <Route element={<Category />} path="category" />
                        <Route element={<SubCategory />} path="subcategory" />
                        <Route element={<DisplayAllSubCategories />} path="displayallsubcategories" />
                        <Route element={<Product />} path="product" />
                        <Route element={<DisplayAllProducts />} path="displayallproducts" />
                        <Route element={<Size />} path="size" />
                        <Route element={<Color />} path="color" />
                        <Route element={<DisplayAllSize />} path="displayallsize" />
                        <Route element={<DisplayAllColor />} path="displayallcolor" />
                        <Route element={<BannerImages/>}   path="bannerimages" />
                        <Route element={<DisplayAllBanners/>}   path="displayallbanner" />
                        <Route element={<ProductImages/>}   path="productimages" />
                         
                    </Routes>
                </div>
            </div>

        </div>

    );
}