const API_KEY = process.env.API_KEY;


export default{
    fetchTrending:{
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchRated:{
        title: "",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },


}