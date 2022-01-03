import React, { useState, useEffect, useCallback } from 'react'

const FetchFunctional = () => {
    const [query, setQuery] = useState('javascript')
    const [search, setSearch] = useState('javascript')

    const url = query && `https://hn.algolia.com/api/v1/search?query=${query}`

    const { data, loading } = useFetch(url)

    

    const handleSearch = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="w-1/2 m-auto">
             <form onSubmit={handleSearch}>
                <div className="flex justify-between">
                    <input onChange={handleInput} value={search} type="text" className="w-full" />
                    <button type="submit" className="bg-blue-500 py-2 px-4 text-white">Search</button>
                </div>
            </form>

            {loading ? <p>loading...</p>: 
            <ul>
                {data.map((item, index) => 
                    <li key={index}>{item.title}</li>
                )}
            </ul>
            }
        </div>
    )
}

export default FetchFunctional

const useFetch = (url) => {
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
    }, [url, fetchData])

    return { data, loading }
}



