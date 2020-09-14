import React, { useState, useEffect } from 'react';
import Space from './Space';
import axios from 'axios';

const App = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(
				'https://api.spacexdata.com/v3/launches?limit=8'
			);
			setPosts(res.data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	const handleBtn = e => {};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Space data={posts} handleBtn={handleBtn} />
		</>
	);
};
export default App;
