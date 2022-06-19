import './searchbox.css';

const SearchBox = ({location}) => {
    return(
        <div className="searchboxdiv">
            <input className="input-reset bn black-80 bg-white pa3 lh-solid br4"
            type="search" placeholder='search for a city/zip' value={location}/>
        </div>
    );
}

export default SearchBox;