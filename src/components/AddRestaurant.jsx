import React, { useContext, useState } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../contextAPI/RestaurantsContext';

const AddRestaurant = () => {
    
    const {addRestaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/", {
                 name,
                 location,
                price_range: priceRange,
            } );
            addRestaurants(response.data.data.restaurant);
            console.log(response);
        }catch (err) {
            console.log(err);
        }
    }

    return (
            <div className = "container  ">
            <form  >
                <div className="row justify-content-between" >
                
                    <div className="col-3">
                        <input value={name} onChange={e=> setName(e.target.value)} type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col-3">
                        <input value={location} onChange={e=> setLocation(e.target.value)} type="text" className="form-control" placeholder="location" />
                    </div>
                    <div className="col-3">
                    
                        <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className= "form-control" >
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="col d-flex justify-content-center">
                    <button onClick={handleSubmit}  type="submit" className="btn btn-primary" > Add Restaurant</button>
                    </div>
                    
                   
                    </div>
            </form>
        </div>
    

    )
}

export default AddRestaurant
