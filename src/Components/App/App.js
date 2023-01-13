import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Home/Home'
import './App.css'

const Redirect = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/home')
	}, [])
	return (
		<></>
	)
}

export default function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Redirect />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</div>
	)
};