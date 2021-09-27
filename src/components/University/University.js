import React from 'react';
import './University.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const University = (props) => {
    //Destructuring data from props
    const { name, rank, image, location, internationalStd, type } = props.university;
    return (
        // Making card along with details
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt="" />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">
                        {name}
                    </h5>
                    <div className="card-text">
                        <p><small>Location : {location}</small></p>
                        <p>{type} University</p>
                        <p>International Students : {internationalStd}</p>
                        <p><strong>Rank : {rank}</strong></p>
                    </div>
                    <div className="card-footer">
                        {/* Calling the function onclick */}
                        <button onClick={() => props.handleAddToFav(props.university)
                        } className="btn btn-success">
                            Add to Favourite <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default University;