import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

// API functions
import { login as loginUser } from '../../services/users';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Input from '../../../src/components/Input/index';

//CSS
import './Login.css';

export default function Login() {
	const navigate = useNavigate();
	// Local state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const cleanForm = () => {
		setEmail('');
		setPassword('');
	};

	const isEmpty = (value) => !value;
	const cookies = new Cookies();
	const endpointRestaurant = cookies.get('EndpointRestaurant');

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isEmpty(email) || isEmpty(password)) {
			toast.error('Se ingresaron datos incorrectos!!!!');
			return;
		}

		const data = {
			email,
			password,
		};

		try {
			const response = await loginUser(data);
			cleanForm();
			cookies.set('Id', response.data.info.id, { path: '/' });
			cookies.set('Usuario', response.data.info.userName, { path: '/' });
			cookies.set('TipoUsuario', response.data.info.userCategory, {
				path: '/',
			});
			cookies.set('NombreResturante', response.data.info.userRestaurant[0], {
				path: '/',
			});

			if (response.data.info.userCategory === 'Comensal') {
				toast.success('Inicio de sesión exitoso!!');

				if (endpointRestaurant && endpointRestaurant != 'undefined') {
					navigate(`/menu/${endpointRestaurant}`);
				} else {
					navigate('/restaurants');
				}
			}

			if (response.data.info.userCategory === 'Administrador de restaurante') {
				toast.success('Inicio de sesión exitoso!!');
				navigate(`/menu/${endpointRestaurant}`);
			}
		} catch (error) {
			toast.error('Error en inicio de sesión');
		}
	};

	return (
		<div className="container login-container p-2 justify-content-center">
			<div className="login-item p-2 ">
				<h2 className="card-title text-center mb-4 title-h2">Iniciar Sesión</h2>
				<form className="form-login p-2" onSubmit={handleSubmit}>
					<Input
						type="text"
						className="form-control"
						placeholder="Email"
						id="meal"
						name="meal"
						value={email || ''}
						callback={(e) => setEmail(e.target.value)}
					/>
					<Input
						className="form-control"
						type="password"
						placeholder="Contraseña"
						id="meal"
						name="meal"
						value={password || ''}
						callback={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" className="btn-prim">
						Ingresar
					</button>

					<div className="container-pass">
						<p className="forget-password">¿Olvidaste tu Contraseña?</p>
					</div>
				</form>
			</div>

			<ToastContainer />
		</div>
	);
}
