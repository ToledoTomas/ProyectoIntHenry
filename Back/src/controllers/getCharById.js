const axios = require ('axios');

const URL = `https://rym2.up.railway.app/api/character/`

exports.getCharById = async (req, res) => {

    try {
        const { id } = req.params;

        const { data } = await axios.get(`${URL}${id}?key=Tomas-Toledo`)
        
        if(data){
            const {id, name, gender, species, origin, image, status} = data;
            
            let character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
            };
            
            return res.status(200).json(character)
            
        }
        return res.status(404).json("Not found")
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}