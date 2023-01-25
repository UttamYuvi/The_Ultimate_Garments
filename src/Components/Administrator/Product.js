import { useStyles } from "./ProductCss";
import { Grid, TextField, Button, Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getData, postData } from "../Services/NodeServices";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useNavigate } from "react-router-dom"; 

// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


export default function Product(props) {

    var classes = useStyles()
    const [categoryId, setCategoryId] = useState('')
    const [categories, setCategories] = useState([])

    const [subCategories, setSubCategories] = useState([])
    const [subCategoryId, setSubCategoryId] = useState('')

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [offerPrice, setOfferPrice] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [status, setStatus] = useState('continue')
    const [saleStatus, setSaleStatus] = useState('')
    const [picture, setPicture] = useState({ url: '/icon.png', bytes: '' })

    // const [value, setValue] = useState(2)
    var navigate = useNavigate()

    const   handleSubmit = async () => {

        var formData = new FormData()
        formData.append('categoryid',categoryId)
        formData.append('subcategoryid',subCategoryId)
        formData.append('productname', productName)
        formData.append('price',price)
        formData.append('offerprice', offerPrice)
        formData.append('stock',stock)
        formData.append('description', description)
        formData.append('ratings', rating)
        formData.append('status', status)
        formData.append('salestatus', saleStatus)
        formData.append('picture', picture.bytes)
        var result = await postData('products/add_new_products', formData, true)
        alert(result.result)
    }
    
    const handleIcon = (event) => {
        setPicture({ url: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }


    const handleCategoryChange = (event) => {

        setCategoryId(event.target.value)
        fetchAllSubCategories(event.target.value)

    }
    const handleSubCategoryChange = (event) => {

        setSubCategoryId(event.target.value)

    }
    const fillCategories = () => {
        return categories.map((item) => {
            return (
                <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
            )
        })
    }
    const fillSubCategories = () => {

        return subCategories.map((item) => {
            return (
                <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
            )
        })
    }

    const fetchAllSubCategories = async (cid) => {
        
        var data = await postData('subcategory/display_subcategory_by_category',{categoryid:cid})
        setSubCategories(data.data)
    }


    const fetchAllCategories = async () => {

        var response = await getData('category/display_all_category')
        setCategories(response.data)
    }

    useEffect(function () {
        fetchAllCategories()
    }, [])

    const handleSalesStates = (event) =>{
        setSaleStatus(event.target.value)
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid className={classes.gridStyle} container spacing={2}>
                    <Grid className={classes.heading} item xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span >
                                Product Interfare
                            </span>
                            <span >
                                <img src="/images/edit.gif" alt="logo" width="40px" style={{ cursor: 'pointer' }} onClick={(event) => navigate('/dashboard/displayallproducts')} />
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="categories">Category</InputLabel>
                            <Select
                                labelId="categories"
                                id="categories"
                                value={categoryId}
                                label="Category"
                                onChange={handleCategoryChange}
                            >
                                
                                {fillCategories()}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <InputLabel id="subcategories">Sub Category</InputLabel>
                            <Select
                                labelId="subcategories"
                                id="subcategories"
                                value={subCategoryId}
                                label="Sub Category"
                                onChange={handleSubCategoryChange}
                            >
                               
                                {fillSubCategories()}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField value={productName} onChange={(event) => setProductName(event.target.value)} variant="outlined" fullWidth label="Product Name" />
                    </Grid>
                    <Grid item xs={4} className={classes.center}>
                        <TextField value={price} onChange={(event) => setPrice(event.target.value)} variant="outlined" fullWidth label="Price" />
                    </Grid>

                    <Grid item xs={4} className={classes.center}>
                        <TextField value={offerPrice} onChange={(event) => setOfferPrice(event.target.value)}  variant="outlined" fullWidth label="Offer Price" />
                    </Grid>
                    <Grid item xs={4} className={classes.center}>
                        <TextField value={stock} onChange={(event) => setStock(event.target.value)} variant="outlined" fullWidth label="Stock" />
                    </Grid>
                    <Grid item xs={8} className={classes.center}>
                        <TextField value={description} onChange={(event) => setDescription(event.target.value)} variant="outlined" fullWidth label="Description" />
                    </Grid>
                    {/* <Grid item xs={4} className={classes.center}>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Typography component="legend">Ratings</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </Grid> */}
                    <Grid item xs={4}>
                        <TextField value={rating} onChange={(event) => setRating(event.target.value)} fullWidth variant="outlined" label="Rating" />
                    </Grid>
                    <Grid item xs={6} className={classes.center}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                        <RadioGroup
                            row
                            value={status}
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel onChange={(event) => setStatus(event.target.value)} value="continue" control={<Radio />} label="Continue" />
                            <FormControlLabel onChange={(event) => setStatus(event.target.value)} value="discontinue" control={<Radio />} label="Discontinue" />
                            
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="subcategories">Sales Status</InputLabel>
                            <Select
                                labelId="Sales Status"
                                id="Sales Status"
                                value={saleStatus}
                                label="Sales Status"
                                onChange={handleSalesStates}
                            >
                                <MenuItem value={"Trending"} >Trending</MenuItem>
                                <MenuItem value={"Most Popular"}>Most Popular</MenuItem>
                                <MenuItem value={"Best Sellings"}>Best Sellings</MenuItem>


                            </Select>
                        </FormControl>
                    </Grid>




                    <Grid item xs={6} className={classes.center}>
                        <Button onChange={handleIcon} fullWidth variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Grid>

                    <Grid item xs={6} className={classes.center}>
                        <Avatar
                            alt="Remy Sharp"
                            src={picture.url}
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.center}>
                        <Button onClick={handleSubmit} variant="contained" >Submit</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.center}>
                        <Button variant="contained" >Reset</Button>
                    </Grid>
                </Grid>


            </div>
        </div>
    )
}