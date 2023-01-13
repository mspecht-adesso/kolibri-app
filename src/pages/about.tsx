import React from 'react';

import { KolButton, KolLink } from '@public-ui/react';
import Button from '../components/button/Button';
import Link from '../components/link/link';
import KoliLink from '../components/koliLink/koliLink';

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
            <div className="my-10">
                <KoliLink />
            </div>
            <div className="my-10">
                <KolLink _label="KolLink" />
            </div>
        </>
	);
};

export default About;
