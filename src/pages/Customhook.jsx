import React, { useState } from 'react'


const Customhook = () => {

    const { count, inCrement, decCrement } = useCustomHook()

    return (
        <div className="w-1/2 m-auto">
            <div className="flex justify-between">
                <span className="text-2xl font-bold text-black">{count}</span>
                <div className="flex space-x-4">
                    <button onClick={inCrement} className="bg-black py-2 text-white px-6">+</button>
                    <button onClick={decCrement} className="bg-black py-2 text-white px-6">-</button>
                </div>
            </div>
        </div>
    )
}


const useCustomHook = (initialCounter = 20) => {
    const [count,setCount] = useState(initialCounter)

    const inCrement = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decCrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return { count, inCrement, decCrement  }

}





export default Customhook
