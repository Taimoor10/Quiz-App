const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const {UserModel} = require('../../database/db');
const {getUserByEmail} = require('../../database/queries');

router.post('/login', async (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];

  if (authHeader) {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    
    const [email, password] = credentials.split(':');

    //Getting the user from DB here
    const user = await getUserByEmail(email);
    console.log(user.email, user.password);

    if(email === user.email && password === user.password) {
        jwt.sign({user}, 'privatekey', { expiresIn: '1h' },(err: any, token: any) => {
            if(err)
            {
                console.log(err) 
            }    
            res.send({accessToken: token});
        });
    } else {
        res.sendStatus(403);
    }
  }
})

module.exports = router;


