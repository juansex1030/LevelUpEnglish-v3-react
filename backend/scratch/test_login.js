const axios = require('axios');

async function testLogin() {
    try {
        console.log('Testing manual login to localhost:3000...');
        const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
            email: 'juanse1030@gmail.com',
            password: 'admin1234' // Default password from server.js bootstrap
        }, {
            headers: {
                'X-App-Source': 'admin'
            }
        });
        console.log('Login Success:', response.status);
        console.log('Cookies:', response.headers['set-cookie']);
        console.log('User:', response.data.user.username);
    } catch (error) {
        console.error('Login Failed:', error.response ? error.response.status : error.message);
        if (error.response) console.error('Error Msg:', error.response.data);
    }
}

testLogin();
