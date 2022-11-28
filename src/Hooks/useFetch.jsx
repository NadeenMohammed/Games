import axios from "axios";
import { useState , useEffect } from "react";

const useFetchData = (URL, params) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getData() {
        return await axios.get(URL, {
            params:params? {platform: 'pc'}
                : null,

            headers:
            {
                'X-RapidAPI-Key': '853b8225cbmshef292eeb01b6e65p126832jsn34e7ab727534',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
        })

    }

    useEffect(() => {
        getData()
        .then(res=>{
            console.log(res);
            setData(res.data);
            setLoading(false);
            setError(null);
        })
        .catch(err=>
            {
                setError(err);
                setLoading(false)
            })
    }, [params])

    return{data, error ,loading}
}

export default useFetchData;