/******************************************************************************
**	@Author:				Thomas Bouder <Tbouder>
**	@Email:					Tbouder@protonmail.com
**	@Date:					Tuesday August 10th 2021
**	@Filename:				useSecret.js
******************************************************************************/

import {useEffect, useState} from 'react';
import {useInputEvent} from 'hook/useInputEvent';

const useSecretCode = (secretCode) => {
	const [count, setCount] = useState(0);
	const [success, setSuccess] = useState(false);
	const key = useInputEvent();

	useEffect(() => {
		if (key == null) return;
		if (key !== secretCode[count]) {
			setCount(0);
			return;
		}
    
		setCount((state) => state + 1);
		if (count + 1 === secretCode.length) {
			setSuccess(s => !s);
		}
	}, [key]);
  
	return success;
};

export default useSecretCode;