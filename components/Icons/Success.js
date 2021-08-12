/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Saturday July 31st 2021
**	@Filename:				Success.js
******************************************************************************/

import	React				from	'react';

function Icon({width = 84, height = 84, className}) {
	return (
		<>
			<svg className={className} width={width} height={height} viewBox={'0 0 84 84'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
				<path d={'M57.05 27.3005L34.65 49.7005L26.95 42.0005C25.55 40.6005 23.45 40.6005 22.05 42.0005C20.65 43.4005 20.65 45.5005 22.05 46.9005L31.85 56.7005C33.25 58.1005 35.35 58.1005 36.75 56.7005L61.6 31.8505C63 30.4505 63 28.3505 61.6 26.9505C60.55 25.9005 58.45 25.9005 57.05 27.3005Z'} fill={'white'}/>
				<path d={'M42 0C18.9 0 0 18.9 0 42C0 65.1 18.9 84 42 84C65.1 84 84 65.1 84 42C84 18.9 65.1 0 42 0ZM42 77C22.75 77 7 61.25 7 42C7 22.75 22.75 7 42 7C61.25 7 77 22.75 77 42C77 61.25 61.25 77 42 77Z'} fill={'white'}/>
			</svg>
		</>
	);
}

export default Icon;
