import { AttachMoney, 
        BarChart, 
        ChatBubbleOutline, 
        DynamicFeed, 
        Info, 
        LineStyle, 
        MailOutline, 
        PersonOutline, 
        Store, 
        Timeline, 
        TrendingUp, 
        WorkOutline } from '@mui/icons-material';
import './sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard:</h3>
                    <ul className='sidebarList'>
                        <Link to="/" className='link'>
                            <li className='sidebarListItem active'>
                                <LineStyle className='listIcon'/>
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='listIcon'/>
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='listIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu:</h3>
                    <ul className='sidebarList'>
                        <Link to="/newUser" className='link'>
                            <li className='sidebarListItem'>
                                <PersonOutline className='listIcon'/>
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className='sidebarListItem'>
                                <Store className='listIcon'/>
                                Products
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <AttachMoney className='listIcon'/>
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <BarChart className='listIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline className='listIcon'/>
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutline className='listIcon'/>
                            Feedback
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutline className='listIcon'/>
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Info className='listIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
