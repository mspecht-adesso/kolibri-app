import React from 'react';

import { KolLink } from '@public-ui/react';

const KoliLink = () => {
	return (
        <>
		    <div>DANGER Button with KoliBri</div>
            <div>
                <KolLink _href="/" _icon="home" _icon-align="right">HOME</KolLink>
            </div>
        </>
	);
};

export default KoliLink;
