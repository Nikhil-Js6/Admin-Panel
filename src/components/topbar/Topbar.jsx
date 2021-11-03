
import { NotificationsNone, Person, Settings, Shield, Translate } from '@mui/icons-material';
import './topbar.scss';

function Topbar() {
    const src = "https://static.toiimg.com/thumb/msid-77402042,imgsize-172229,width-800,height-600,resizemode-75/77402042.jpg";
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>
                        <Shield className='logoIcon'/>
                        Admin
                    </span>
                </div>
                <div className='topRight'>
                    <div className='iconWrapper'>
                        <Translate />
                    </div>
                    <div className='iconWrapper'>
                        <NotificationsNone />
                        <span className='iconBadge'>2</span>
                    </div>
                    <div className='iconWrapper'>
                        <Settings />
                    </div>
                    {src 
                        ? <img className="topAvtar" src={src} alt="pic"/>
                        : <Person className="topAvtar"/>
                    }
                </div>
            </div>            
        </div>
    )
}

export default Topbar;
