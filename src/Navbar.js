import logo from './logo.svg';
import './navbar.css';

function Navbar(){
    return(
        <header className="bg-near-black fixed w-100 ph3  ph4-m ph5-l">
           <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="WeatherApp">
                    <img src={logo} className="dib w2 h2 br-100" alt="Site Name"/>
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link   white-80 hover-gold f6 f5-l dib mr3 mr4-l" href="/home" title="Home">Home</a>
                    <a className="link  white-80 hover-gold f6 f5-l dib" href="/contact" title="Contact">Contact</a>
                </div>
            </nav>
        </header>

    );
}

export default Navbar;