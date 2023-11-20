import './HomeHeader.css';
import { Link } from 'react-router-dom';
import logo from '../assets/x-star-app-logo-1.png'

const HomeHeader = () => {
    const content = (
        <header className="home_header">
            <nav className="home_header_nav">
                <div className="nav_left">
                    <img
                        src={logo}
                        alt="XStar app logo"
                        id="XStarapplogo"
                    />
                </div>
                
                <div className="nav_center">
                    <div className="nav_item">
                        <img src={logo} alt="Upload"/>
                        <p>Upload</p>
                    </div>
                    <div className="nav_item">
                        <img src={logo} alt="Home" />
                        <p>Home</p>
                    </div>
                    <div className="nav_item">
                        <img src={logo} alt="Dimensions" />
                        <p>Dimensions</p>
                    </div>
                    <div className="nav_item">
                        <img src={logo} alt="Dashboard" />
                        <p>Dashboard</p>
                    </div>
                </div>
                
                <div className="nav_right">
                    <img src={logo} alt="Notifications" id="notificationIcon" />
                </div>
            </nav>
        </header>
    );

    return content;
}

export default HomeHeader;
