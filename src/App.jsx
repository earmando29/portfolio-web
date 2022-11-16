import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Timeline from  './components/Timeline';
import Footer from  './components/Footer';

function App() {

	return (
		<div className="App">
			<Intro />
			<Portfolio />
			<Timeline />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
