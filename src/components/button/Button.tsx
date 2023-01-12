import React from 'react';

import { KolButton } from '@public-ui/react';

const Button = () => {
	return (
        <>
		    <div>DANGER Button with KoliBri</div>
            <div>
                <KolButton _label="DANGER" _variant="danger" />
            </div>
        </>
	);
};

export default Button;
