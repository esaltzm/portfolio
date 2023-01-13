import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'
import IconContainer from '../IconContainer/IconContainer'
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
			<Nav />
			<IconContainer />
			<Routes>
				<Route path='/' element={<Redirect />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</div>
	)
};