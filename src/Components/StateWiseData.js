import React,{useEffect,useState} from 'react';
import "./StateWiseStyle.css";

const StateWiseData = () => {
    const [data,setData] = useState([]);
    const getCovidData = async () =>{
       const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <>
            <div className="container-fluid mt 5">
            <div className="main-heading">
            <h1 className = "mb-5 text-center"><span className="font-weight-bold"></span>

            <marquee width="60%" direction="left" height="100px">
            <mark> COVID-19 DASHBOARD</mark></marquee></h1>
            <h2>🔴 Live</h2>
            </div> 
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((currElem,ind)=>{
                            return(
                            <tr key={ind}>
                            <th>{currElem.state}</th>
                            <td>{currElem.confirmed}</td>
                            <td>{currElem.recovered}</td>
                            <td>{currElem.deaths}</td>
                            <td>{currElem.active}</td>
                            <td>{currElem.lastupdatedtime}</td>
                        </tr>            
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            </div>
            
        </>
    )
}

export default StateWiseData
