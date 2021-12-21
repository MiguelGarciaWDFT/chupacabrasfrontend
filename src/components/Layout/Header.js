import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="bg-black">
			<nav className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
					<div className="flex items-center">
						<Link to="/">
							<img className="h-12 w-auto" src="https://res.cloudinary.com/cloudguns/image/upload/v1640051790/chupacabrasimages/PORTADAS%20SELECCIONADAS/chupacabrasprime_ciwfkw.png" alt="" />
						</Link>
						<div className="ml-10 space-x-8 lg:block">
							<Link to="/revistas" className="text-base font-medium text-white hover:text-indigo-50">
								Revistas
							</Link>
							<Link to="/perfil" className="text-base font-medium text-white hover:text-indigo-50">
								Perfil
							</Link>
							<Link to="/sobre-nosotros" className="text-base font-medium text-white hover:text-indigo-50">
								Sobre nosotros
							</Link>
						</div>
					</div>
					<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<Link to="/registro" class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-gray-700 hover:to-indigo-700">
							Crear cuenta
						</Link>
						<Link to="/iniciar-sesion" class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-red-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-gray-700 hover:to-indigo-700">
							Iniciar sesión
						</Link>
        			</div>
				</div>
			</nav>
		</header>
	)
}