// import {useEffect, useState} from 'react';

function CarList(props) {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-list bg--light shadow rounded p-3">
                        <h2 className="car-list__title">Cars</h2>
                        <div className="car-list__content">
                            {props.cars.slice(0,10).map(car => (
                                <div className="car-list__item" key={car.Model_ID}>
                                    <p className="car-list__item-name">{car.Make_Name}</p>
                                    <p className="car-list__model-name">{car.Model_Name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarList;