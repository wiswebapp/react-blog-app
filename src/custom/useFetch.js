import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setIsLoading(false)
                setData(data.posts)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }, [url]);

    return {data, isLoading}
}

export default useFetch;