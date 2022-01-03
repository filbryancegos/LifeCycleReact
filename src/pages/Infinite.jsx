import React, { useState, useEffect, useCallback } from 'react'

const Infinite = () => {
    let infinetScroll = InfiniteScrollHeight();
    const [tableContent, setTableContent] = useState([])


    const fetchData =  useCallback( async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const data = await res.json()
        setTableContent(data)
    }, [])


    useEffect(() => {
        fetchData()       
    }, [fetchData])
    return (
        <div className="w-1/2 m-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-black border-b">Id</th>
                        <th className="text-black border-b">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent.slice(0, infinetScroll).map(item =>
                        <tr key={item.id}>
                            <td className="text-black border-b">{item.title}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Infinite

const InfiniteScrollHeight = (start = 30, pace = 10) => {
    const [limit, setLimit] = useState(start)

    window.onscroll = () => {
        const { innerHeight } = window;
        const { scrollTop, offsetHeight } = document.documentElement;


        if (innerHeight + scrollTop === offsetHeight ) {
            setLimit(limit + pace)
        }
    }
    return limit
}
