const axios = require('axios')

    async function fetchCity (city) {
        try {
            if(city.trim() === "") throw new SyntaxError("empty string");
            let url = `https://example.com/data/2.5/weather?units=metric&q=${city}`
            const response = await axios.get(url)
            const data = await response
            console.log(response)
        } catch(e) {
            console.log(e)
        }
    }
    fetchCity('beijing');
