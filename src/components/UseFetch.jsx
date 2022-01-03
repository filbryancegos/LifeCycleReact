import React, { useState, useEffect, useCallback } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async () => {
        setLoading(true)
            const response = await fetch(url);
            const data = await response.json()
            setData(data.hits)
            setLoading(false)
    
    }, [url])

    useEffect(() => {
        fetchData()
    }, [url, fetchData ])

    return { data, loading }

}

export default UseFetch


