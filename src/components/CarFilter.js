//import {react} from 'react';
//dropdown for make and year
//add search field for vehicle name
import {useEffect} from 'react';
function CarFilter(props) {
    useEffect(()=>{
        
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="car-filter bg--light shadow rounded mb-5 p-3">
                        <div className="car-filter__title">
                            <h2>Filter</h2>
                        </div>
                        <div className="car-filter__content">
                            <div className="car-filter__item">

                                <div className="car-filter__item-make">
                                    <h3></h3>
                                </div>

                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarFilter;