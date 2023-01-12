import { KolAlert, KolIcon, KolKolibri, KolLink } from '@public-ui/react';
import React from 'react';
import Head from 'next/head';

import { KolButton } from '@public-ui/react';

const Index = () => {
	return (
		<>
			<Head>
				<title>Seed-Projekt | KoliBri</title>
				<meta name="description" content="Webanwendung mit der KoliBri-Komponentenbibliothek." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" type="image/x-icon" href="assets/favicon.ico" />
				<link rel="stylesheet" href="assets/bund/bund.css" />
				<link rel="stylesheet" href="assets/codicons/codicon.css" />
				<link rel="stylesheet" href="assets/noto-sans/noto-sans.css" />
				<link rel="stylesheet" href="assets/roboto/roboto.css" />
				<link rel="stylesheet" href="assets/fontawesome-free/css/all.min.css" />
				<link rel="stylesheet" href="assets/icofont/icofont.min.css" />
				<meta name="robots" content="noindex" />
				<meta name="kolibri" content="dev-mode=true" />
			</Head>
			<div className="bmf container mx-auto my-10 max-w-800px">
				<header className="text-center">
					<div className="grid grid-cols-2 items-center">
						<div>
							<KolKolibri className="block m-auto w-40" _labeled={false}></KolKolibri>
						</div>
						<div>
							<img className="block m-auto h-25" src="assets/logo.nextjs.png" alt="Logo vom Next.js Framework" />
						</div>
					</div>
					<strong className="text-2xl">Willkommen zu KoliBri</strong>
					<div>
						<KolButton _label="KoliBri Button" />
					</div>
					<div>
						<KolLink _label="about" _href="/about" />
					</div>
					<div>
						<KolLink _label="links" _href="/links" />
					</div>
				</header>
				<main className="grid md:grid-cols-2 gap-6 p-12">
					<KolAlert _type="success" _heading="Dokumentation" _variant="card" _level={2}>
						<KolLink _href="https://public-ui.github.io/" _fill _target="_blank">
							<KolIcon _ariaLabel="" _icon="fa-sharp fa-solid fa-book" /> Dokumentation öffnen
						</KolLink>
					</KolAlert>
					<KolAlert _type="info" _heading="Theming" _variant="card" _level={2}>
						<KolLink _href="https://public-ui.github.io/?path=/docs/designer--page" _fill _target="_blank">
							<KolIcon _ariaLabel="" _icon="fa-solid fa-palette" /> KoliBri-Designer öffnen
						</KolLink>
					</KolAlert>
					<KolAlert _type="warning" _heading="Mitwirken" _variant="card" _level={2}>
						<KolLink _href="https://github.com/public-ui/kolibri/" _fill _target="_blank">
							<KolIcon _ariaLabel="" _icon="fa-brands fa-github" /> Github öffnen
						</KolLink>
					</KolAlert>
					<KolAlert _type="error" _heading="Kontakt" _variant="card" _level={2}>
						<KolLink _href="mailto:kolibri@itzbund.de" _fill _target="_blank">
							<KolIcon _ariaLabel="" _icon="fa-solid fa-envelope" /> E-Mail schreiben
						</KolLink>
					</KolAlert>
				</main>
			</div>
		</>
	);
};

export default Index;
