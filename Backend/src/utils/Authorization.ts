const jwt = require('jsonwebtoken');

const verifyJWT = (req: any, res: any, next: any) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        res.sendStatus(403)
    }
}