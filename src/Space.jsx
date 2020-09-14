import React from 'react';
import './index.css';
import Cards from './Cards';
import Filter from './Filter';

const Space = props => {
	return (
		<>
			<div>
				<div>
					<h3>SpaceX Launch Progarm</h3>
				</div>
				<div>
					<Filter handleBtn={props.handleBtn} />
				</div>

				{props.data.map((val, id) => {
					return (
						<div>
							<Cards
								flight_no={val.flight_number}
								mission_name={val.mission_name}
								mission_id={val.mission_id}
								launch_year={val.launch_year}
								success_launch={val.launch_success}
								success_land={val.launch_landing}
								key={id}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Space;
