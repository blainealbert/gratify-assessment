function CarSearch() {
    return (
        <div className="car-search">
            <form className="car-search__form">
                <div className="car-search__form-group">
                    <label htmlFor="car-search__input-make">Make</label>
                    <input type="text" name="car_make" id="car-search__input-make" className="car-search__input" />
                </div>
            </form>
        </div>
    )
}
export default CarSearch;