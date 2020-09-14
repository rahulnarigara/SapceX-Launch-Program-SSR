import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cards = props => {
	return (
		<>
			<Card
				style={{ width: '15rem' }}
				className='float-left my-1 mx-1 ml-3 bg-light h-25 d-flex align-items-center'>
				<Card.Img
					className='image-fluid w-75 align-self-center mt-2'
					variant='top'
					src='https://e7.pngegg.com/pngimages/626/515/png-clipart-international-space-station-spacex-dragon-falcon-9-outer-space-web-browser-spacex-crs14-label-logo.png'
				/>
				<Card.Body>
					<Card.Title className='text-truncate text-primary'>
						{props.mission_name} #{props.flight_no}
					</Card.Title>

					<Card.Text className='font-weight-bold text-truncate'>
						Mission_ids:<li>{props.mission_id}</li>
						<br />
						Launch Year:{props.launch_year}
						<br />
						Success Launch:{props.launch_success}
						<br />
						Success Land:{props.launch_landing}
						<br />
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};
export default Cards;
