import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="bg-black">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
					<div className="flex items-center">
						<Link to="/">
							<img className="h-10 w-auto" src="https://cdn.worldvectorlogo.com/logos/ironhack-1.svg" alt="" />
						</Link>
						<div className="ml-10 space-x-8 lg:block">
							<Link to="/revistas" className="text-base font-medium text-white hover:text-indigo-50">
								Revistas
							</Link>
							<Link to="/perfil" className="text-base font-medium text-white hover:text-indigo-50">
								Tu perfil
							</Link>
							<Link to="/sobre-nosotros" className="text-base font-medium text-white hover:text-indigo-50">
								Sobre nosotros
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}