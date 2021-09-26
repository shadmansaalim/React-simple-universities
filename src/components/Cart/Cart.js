import React from 'react';

const Cart = (props) => {
    //Destructuring
    const { cart } = props;
    let totalStudents = 0
    //Iterating over array items and adding all the international students of all universities.
    for (const uni of cart) {
        totalStudents += uni.internationalStd;
    }
    return (
        <div className="p-2 bg-secondary text-white rounded-3">
            <h5>Total Universities Added : {cart.length}</h5>
            <p>Total International Students : {totalStudents}</p>
            <p><b><u>Universities Selected</u></b></p>
            <ol>
                {
                    //Maping over the cart array and making a list of selected universities.
                    cart.map(uni => <li>{uni.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;