import React, { useEffect, useState } from 'react';
import University from '../University/University';
import Cart from '../Cart/Cart';
const Main = () => {
    //Declaring State
    const [universities, setUniversities] = useState([]);
    const [cart, setCart] = useState([]);
    //Fetching data that I built for the project
    useEffect(() => {
        fetch('./universities.JSON')
            .then(res => res.json())
            .then(data => setUniversities(data));
    }, []);
    //Add to favourite button functionality
    const handleAddToFav = university => {
        for (const item of cart) {
            //Checking whether university is already added or not
            if (item === university) {
                return;
            }
        }
        //Creating a new array and setting it
        const newCart = [...cart, university];
        setCart(newCart);
    }
    return (
        <div className="container mx-auto row mt-5">
            <div className="col-lg-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        //Taking each university and passing it on the University component
                        universities.map(university => <University
                            key={university.rank}
                            university={university}
                            //Passing the function to University component
                            handleAddToFav={handleAddToFav}
                        ></University>)
                    }
                </div>
            </div>
            <div className="col-lg-3">
                {/* Passing data to cart component */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;