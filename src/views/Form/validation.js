const validation = (userData) => {
	let errors = {};

	if(!userData.email){
		errors.email = "*El email es requerido"
	}	else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
		errors.email = "*No tiene formato de email"
	} if (userData.email.length >= 35){
		errors.email = "*El email no puede contener más de 35 caracteres"
	};

	if(!userData.password){
		errors.password = "*La contraseña es requerida";
	} else if (!/\d/.test(userData.password)){
		errors.password = "*La contraseña debe tener al menos un número"
	} else if (userData.password.length < 6 || userData.password.length > 10){
		errors.password = "*La contraseña debe tener entre 6 y 10 caracteres"
	};

	return errors;
};

export default validation;