export function handleLogin(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                data.message = 'Usuario y/o contraseña incorrectos.';
            }
            if (response.status === 403) {
                data.message = 'Debes confirmar tu correo electronico para ingresar';
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}