import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Filter = props => {
	return (
		<>
			<Card
				style={{ width: '15rem' }}
				className='my-1 mx-1 ml-3 align-item-center bg-light position-static d-flex align-items-center float-left'>
				<Card.Img />
				<Card.Body className='text-center'>
					<Card.Title className='text-truncate text-primary '></Card.Title>
					<p>Filter By Year</p>
					<Button
						className='bg-success mx-3 my-1'
						value='2008'
						onClick={props.handleBtn}>
						2008
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2009'
						onClick={props.handleBtn}>
						2009
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2010'
						onClick={props.handleBtn}>
						2010
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2011'
						onClick={props.handleBtn}>
						2011
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2012'
						onClick={props.handleBtn}>
						2012
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2013'
						onClick={props.handleBtn}>
						2013
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2014'
						onClick={props.handleBtn}>
						2014
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2015'
						onClick={props.handleBtn}>
						2015
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2016'
						onClick={props.handleBtn}>
						2016
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2017'
						onClick={props.handleBtn}>
						2017
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2018'
						onClick={props.handleBtn}>
						2018
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='2019'
						onClick={props.handleBtn}>
						2019
					</Button>

					<p>Success Lauch</p>
					<Button
						className='bg-success mx-3 my-1'
						value='true'
						onClick={props.handleBtn}>
						True
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='false'
						onClick={props.handleBtn}>
						False
					</Button>

					<p>Success Land</p>
					<Button
						className='bg-success mx-3 my-1'
						value='true'
						onClick={props.handleBtn}>
						true
					</Button>
					<Button
						className='bg-success mx-3 my-1'
						value='false'
						onClick={props.handleBtn}>
						false
					</Button>
					<Card.Text className='font-weight-bold text-truncate'></Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default Filter;
