import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Dashboard />} />
			{/* <Route path="users/:id" element={<Users />} /> */}
		</Routes>
	</BrowserRouter>
);

export default App;
