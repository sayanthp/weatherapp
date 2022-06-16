import './searchbox.css';
const SearchBox = () => {

return(
    <div className="searchboxdiv">
        <input className="input-reset bn black-80 bg-white pa3 lh-solid br4"
        type="search" placeholder='search for a city/zip'/>
    </div>
);
}

export default SearchBox;