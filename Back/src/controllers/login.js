const {User} = require('../DB_connection')

const login = async (req, res) => {
    const { email, password } = req.query;

    try {
        
        if(!email || !password)
            return res.status(400).json({error: 'Faltan datos'});

        const user = await User.findOne({
            where: {email}
        })

        if(!user)
            return res.status(400).json({error: 'Usuario no encontrado'});

        return user.password === password ?
        res.status(200).json({access: true}) :
        res.status(403).json({error: 'Contraseña incorrecta para ese usuario'})

    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

// const login = (req, res) => {
//     const { email, password } = req.query;
//     let access = false;

//     users.forEach((user)=>{
//         if(user.email === email && user.password === password){
//             access = true;
//         }
//         return res.status(200).json({access});
//     })
// }

module.exports = login;