import React, { Component } from 'react'

export default class Weather extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            query: 'Talisay'
        }
        this.API_Key = 'b9d24f162f33506c9eae73ef2bd4b4d9'
        this.URL = 'https://api.openweathermap.org/data/2.5/weather'
    }

     getCurrentWeather = async () => {
        const { API_Key, URL } = this
        const { query } = this.state

        const response = await fetch(`${URL}?q=${query}&appid=${API_Key}`)
        const data = await response.json()
        this.setState({
            loading: false
         })
        return data
    }

    componentDidMount() {
        this.fetchCurrentWeather()
    }

    fetchCurrentWeather = async () => {
        await this.getCurrentWeather().then(data => {
            this.setState({
               data
            })
        })
    }

    dateBuilder = (d) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }

    onSearch = (e) => {
        const { value } = e.target
        this.setState({
            query: value
        })
    }

    handleSerch = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
         })
        this.fetchCurrentWeather()
    }

    render() {
        const { name, weather, main } = this.state.data
        const { query } = this.state
        return (
            <div className="m-auto w-1/2">
                {this.state.loading ? <div className="text-black font-bold text-base text-center">Loading...</div>:
                    <>
                        <form onSubmit={this.handleSerch}>
                            <div className="grid grid-cols-3">
                                <input name={query} value={query} onChange={this.onSearch}  type="text" className="block w-full col-span-2" placeholder="" />
                                <button className="bg-primary-500 bg-blue-500 text-white py-4 px-6 flex col-span-1">Search</button>
                            </div>
                        </form>
                       
                        <div className="mt-12 text-center border-b pb-6">
                            <h1 className="text-3xl font-bold">Welcome <span>{name}</span></h1>
                            <div className="text-black text-2xl pt-4">{ this.dateBuilder(new Date()) }</div>
                        </div>

                        <div className="mt-6 text-center">
                            <h1 className="text-6xl text-center">
                                {weather && weather[0].main}
                            </h1>
                            <div className="text-black text-2xl pt-4">
                                { main && 
                                    <div className="space-x-1">
                                        <span>{Math.round(main.temp)}°c</span>
                                        <span>/</span>
                                        <span>{Math.round(main.temp_min)}°c</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </>
                }
                
            </div>
        )
    }
}
