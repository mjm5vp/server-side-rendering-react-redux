import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I'm the Home component</div>
			<button
				onClick={() => {
					console.log('oh hai Mark');
				}}
			>
				Press me
			</button>
		</div>
	);
};

export default Home;
