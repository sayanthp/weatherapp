import logo from './logo.svg';
import './navbar.css';

function Navbar(){
    return(
        <nav className="bg-near-black db dt-l w-100 border-box pa3 ph5-l">
            <a className="db dtc-l v-mid mid-gray w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="WeatherApp built using react">
                <img src={logo} className="dib w2 h2 br-100" alt="react"/>
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a className="link dim white-80 f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
                <a className="link dim white-80 f6 f5-l dib mr3 mr4-l" href="/" title="How it Works">How it Works</a>
                <a className="link dim white-80 f6 f5-l dib" href="/" title="Contact">Contact</a>
            </div>
        </nav>

    );
}

export default Navbar;