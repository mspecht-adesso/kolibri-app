import React from 'react';

import { KolButton } from '@public-ui/react';
import Button from '../components/button/Button';
import Link from '../components/link/link';

const About = () => {
	return (
        <>
		    <div>About</div>
            <div className="my-10">
                <KolButton _label="KolButton" />
            </div>
            <div className="my-10">
            <Link />
            </div>
            <div className="my-10">
            <Button />
            </div>
        </>
	);
};

export default About;
