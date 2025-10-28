import axios from "axios";

// Configurar la URL base
const apiClient = axios.create({
	baseURL: "http://localhost:8000",
});

// Interceptor para agregar el token automáticamente a todas las peticiones
apiClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("access");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Interceptor para manejar errores de autenticación
apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			console.error("Error 401: No autenticado o token expirado");
			// Opcional: limpiar localStorage y redirigir al login
			// localStorage.removeItem("access");
			// localStorage.removeItem("refresh");
			// window.location.href = "/login";
		}
		return Promise.reject(error);
	}
);

export default apiClient;
