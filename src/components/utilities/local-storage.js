// use local storage as your db for now
const addToDb = id => {
    const exists = getDb();
    let university_cart = {};
    if (!exists) {
        university_cart[id] = 1;
    }
    else {
        university_cart = JSON.parse(exists);
        if (university_cart[id]) {
            const newCount = university_cart[id] + 1;
            university_cart[id] = newCount;
        }
        else {
            university_cart[id] = 1;
        }
    }
    updateDb(university_cart);
}

const getDb = () => localStorage.getItem('university_cart');
const updateDb = cart => {
    localStorage.setItem('university_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const university_cart = JSON.parse(exists);
        delete university_cart[id];
        updateDb(university_cart);
    }
}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('university_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
