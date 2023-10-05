const Footer = () => {
    return (
        <div className="footer">
            <div className="notify">
                <form>
                    <label htmlFor="email">
                        Get notified on the latest jobs!
                    </label>
                    <br />
                    <input 
                        id="email"
                        type="text"
                        placeholder="Email address"    
                    />
                    <button>Subscribe</button>
                </form>
            </div>
            <div className="footer-items">
                <ul>
                    <li>lorem</li>
                    <li>ipsum</li>
                    <li>dolor</li>
                    <li>sit</li>
                    <li>&copy; epic cx jobs, 2023</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Footer;