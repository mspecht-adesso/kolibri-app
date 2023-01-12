import React from 'react';

import { KolButton } from '@public-ui/react';
import Button from '../components/button/Button';
import Link from '../components/link/link';

const About = () => {
	return (
        <>
		    <div>About</div>
            <div>
                <KolButton _label="KolButton" />
            </div>
            <Button />
            <Link />
        </>
	);
};

export default About;
