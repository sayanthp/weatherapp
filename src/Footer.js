import './footer.css';

function Footer(){
    return(
        <footer className="bg-near-black white-80 pv5  ph4">
            <p className="f6"><span className="dib mr4 mr5-ns">©2022 Your Company LLC, Inc.</span>
                <a className="link white-80 hover-light-purple" href="/terms">Terms</a> /
                <a className="link white-80 hover-green" href="/privacy"> Privacy </a>
            </p>
        </footer>
    );
}

export default Footer;