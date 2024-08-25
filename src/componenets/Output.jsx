import React, { useState,useEffect } from 'react';
import { FaSearch } from "react-icons/fa";

const Output = ({ pincode, data }) => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data && data.PostOffice) {
            setFilteredData(data.PostOffice);
        }
    }, [data]);
    const handleFilterData = (e) => {
            const filteredplaceData = data.PostOffice.filter(place =>
                place.Name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredData(filteredplaceData);
    };

    return (
        <div>
            <h3><strong>Pincode:</strong> {pincode}</h3>
            <h3><strong>Message:</strong> Number of pincode(s) found: {filteredData.length}</h3>

            <div className='filter'>
                <FaSearch />
                <input
                    type="text"
                    placeholder='Filter'
                    onChange={handleFilterData}
                />
            </div>

            <div className='listData'>
                    {filteredData.length>0 ?
                    filteredData.map((placeDetails, index)=>(
                        <ul key={index}>
                            <li>Post office name: {placeDetails.Name}</li>
                            <li>Pincode: {placeDetails.Pincode}</li>
                            <li>District: {placeDetails.District}</li>
                            <li>State: {placeDetails.State}</li>
                        </ul>
                    )) : (
                        <p>Couldn’t find the postal data you’re looking for…</p>
                    )}
                        
                    
            </div>
        </div>
    );
}

export default Output;