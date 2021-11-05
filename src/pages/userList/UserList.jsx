import './userlist.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline} from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter( item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return(
            <div className='user'>
                <img className='userImg' src={params.row.avtar} alt=""/>
                {params.row.userName}
            </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120},
        { field: 'transaction', headerName: 'Transaction', width: 160, },
        { field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
              return(
                  <div className='edit'>
                      <Link to={"/user/" + params.row.id}>
                          <button className='userListEdit'>Edit</button>
                      </Link>
                      <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
                  </div>
              )
        }}
      ];

    return (
        <div className='userList'>
            <DataGrid
                style={{backgroundColor: "#333",color: "#fff"}}
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList;
