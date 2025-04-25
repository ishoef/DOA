import React, { useEffect, useState } from "react";
import SingleState from "../SingleState/SingleState";

const Stat = () => {

    // const statistics = fetch('/Jsons/Statistics.json').then(res => res.json());

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('/Jsons/Statistics.json');
                const data = await res.json();
                setStatistics(data);
            }
            catch(error){
                console.log('error from fetch data', error);
            }
        }
        fetchData();
    }, [])
 
    return (
        <div className="grid grid-cols-4 w-[80%] mx-auto gap-5 my-5 absolute top-170 left-0 right-0">
            {
                statistics.map(statistic => <SingleState key={statistic.id} statistic={statistic} ></SingleState>)
            }
        </div>
    );
};

export default Stat;
