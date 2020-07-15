import React from 'react'
import Base from '../core/Base'
import {isAutheticated} from '../auth/helper/index'
import {Link} from 'react-router-dom'
import Menu from '../core/Menu'

 const AdminDashboard = ()=>    {

    const {user:{name,email,role}} = isAutheticated();
  
    const adminRightSide =()=>{

        return(
            <div>
                <div className="card mb-4">
                    <h4 className="card-header">Admin Information</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="badge badge-success mr-2">Name:</span>{name}
                        </li>
                        <li className="list-group-item">
                            <span className="badge badge-success mr-2">Email:</span>{email}
                        </li>
                        <li className="list-group-item">
                         
                            <span className="badge badge-danger"> Admin Area</span>
                              </li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div>
        <Menu/>
        <div className="container">
        
            
          <form class="form-inline">
					<div class="form-group mt-3">
						<input
							type="text"
							placeholder="SEARCH USER"
							id="search"
							class="form-control mx-sm-3"
							aria-describedby="passwordHelpInline"
						/>
						<button type="submit" class="btn btn-primary">
							Search
						</button>
					</div>
				</form>
                <table className="table table-borderless">
					<thead>
						<tr>
							<th scope="col">S.No</th>
							<th scope="col">Username</th>
							<th scope="col">Title</th>
							<th scope="col">Status</th>
							<th scope="col">Date</th>
							<th scope="col">Notes</th>
						</tr>
					</thead>
                    </table>
           
        </div>
        </div>
    )
}
export default AdminDashboard;