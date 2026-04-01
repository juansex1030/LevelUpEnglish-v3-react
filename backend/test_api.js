const axios = require('axios');
const API_URL = 'http://localhost:3000/api/v1';

async function test() {
    try {
        // 1. Login as admin
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
            email: 'juanse1030@gmail.com',
            password: 'admin1234'
        });
        const token = loginRes.data.token;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        
        console.log('Logged in. Token acquired.');
        
        // 2. Fetch users
        const usersRes = await axios.get(`${API_URL}/admin/users`, config);
        console.log('Users:', usersRes.data.users.map(u => ({ id: u.id, username: u.username })));
        
        const firstUserId = usersRes.data.users[0].id;
        console.log(`Testing progress for user ID: ${firstUserId}`);
        
        // 3. Fetch progress
        const progressRes = await axios.get(`${API_URL}/admin/users/${firstUserId}/progress`, config);
        console.log('Progress Res:', progressRes.data);
        
    } catch (err) {
        console.error('Error:', err.response?.status, err.response?.data || err.message);
    }
}

test();
