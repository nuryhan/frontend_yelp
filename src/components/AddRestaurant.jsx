import React from 'react'

const AddRestaurant = () => {
    return (
            <div className = "container  ">
            <form  >
                <div className="row justify-content-between" >
                
                    <div className="col-3">
                        <input type="text" className="form-control" placeholder="name"/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control" placeholder="location" />
                    </div>
                    <div className="col-3">
                    
                        <select className= "form-control" >
                            <option value="selected"  disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="col d-flex justify-content-center">
                    <button className="btn btn-primary" > Add Restaurant</button>
                    </div>
                    
                   
                    </div>
            </form>
        </div>
    

    )
}

export default AddRestaurant
