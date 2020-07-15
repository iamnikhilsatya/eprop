import React,{Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAutheticated } from '../auth/helper';

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return {
			color: '#2ecc72'
		};
	} else {
		return {
			color: '#FFFFFF'
		};
	}
};
const Menu = ({ history }) => {
	return (
		
		<div>
	
			<ul className="nav nav-tabs 
			">
				<li className="nav-item">
					<Link className="nav-link" to="/home" style={currentTab(history, '/')}>
						
						<span className="text-primary">HOME</span>

					</Link>
				</li>
				
				{isAutheticated()&& isAutheticated().user.role===0 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/user/dashboard" style={currentTab(history, '/user/dashboard')}>
					
						<span className="text-primary">PHOTOS</span>
						
					</Link>
				</li>
				) }
				{isAutheticated()&& isAutheticated().user.role===1 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/admin/dashboard" style={currentTab(history, '/admin/dashboard')}>
						
						<span className="text-primary">ADMIN DASHBOARD</span>
					</Link>
				</li>
				)}
				{isAutheticated()&& isAutheticated().user.role===0 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/user/selected" style={currentTab(history, '/user/dashboard')}>
					
						<span className="text-primary">SELECTED</span>
						
					</Link>
				</li>
				) }
				{isAutheticated()&& isAutheticated().user.role===1 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/addcustomer" style={currentTab(history, '/addcustomer')}>
						<span className="text-primary">ADD CUSTOMER</span>
					</Link>
				</li>
				)}
				{isAutheticated()&& isAutheticated().user.role===1 &&(
					<li className="nav-item">
					<Link className="nav-link" to="/admin/addevents" style={currentTab(history, '/admin/addevents')}>
						<span className="text-primary">EVENTS</span>
					</Link>
				</li>
				)}
				
               
				{isAutheticated() && (
					<li className="nav-item">
						<span
                        className="nav-link text-primary"
                        onClick={()=>{
                            signout(()=>{
                                history.push("/")
                            })

                        }}
                        >
                            SIGNOUT
                        </span>
					</li>
				)}
			</ul>
		</div>
	);
};
export default withRouter(Menu);
