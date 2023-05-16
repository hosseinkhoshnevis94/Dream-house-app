const { default: axios } = require("axios");

export const fetchData = async (slug,params) =>{
    const baseUrl = 'https://bayut.p.rapidapi.com'
    const {data} = await axios.get(`${baseUrl}${slug}`, {
        headers: {
            "X-RapidAPI-Key": "c2b0f31dd2mshbf3939f4b1c684ap19274bjsncee2f9f26eb2",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
        params:{
            locationExternalIDs: "5002,6020",
            ...params
        }
    })
    return data
}
    
