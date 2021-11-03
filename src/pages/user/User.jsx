import './user.scss';
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom';

function User() {
    return (
        <div className='users'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='showTop'>
                        <img className='showImg' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className='showBottom'>
                       <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                           <PermIdentity className="userShowIcon" />
                           <span className="userShowInfoTitle">annabeck99</span>
                       </div>
                       <div className="userShowInfo">
                           <CalendarToday className="userShowIcon" />
                           <span className="userShowInfoTitle">10.12.1999</span>
                       </div>
                            <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input className="userUpdateInput" type="text" placeholder="annabeck99" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input className="userUpdateInput" type="text" placeholder="Anna Becker" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input className="userUpdateInput" type="text" placeholder="annabeck99@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input className="userUpdateInput" type="text" placeholder="+1 123 456 67" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input className="userUpdateInput" type="text" placeholder="New York | USA" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
