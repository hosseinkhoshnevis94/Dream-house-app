const { default: axios } = require("axios");

export const fetchData = async (slug,params) =>{
    const baseUrl = 'https://bayut.p.rapidapi.com'
    const {data} = await axios.get(`${baseUrl}${slug}`, {
        headers: {
            "X-RapidAPI-Key": "5d11cc1328mshd8c3431b581c7c7p13e601jsnd429689f901f",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
        params:{
            locationExternalIDs: "5002,6020",
            ...params
        }
    })
    return data
}
    
