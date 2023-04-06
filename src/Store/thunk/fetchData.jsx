import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const fetchData = createAsyncThunk('user/get',async()=>{
    const retrData=await axios.get('https://jsonplaceholder.typicode.com/posts/');
    return retrData.data;
})

export default fetchData