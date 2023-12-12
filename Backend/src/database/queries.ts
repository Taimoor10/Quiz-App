import { UserModel } from './db';

exports.getUserByEmail = async function Database(email: string) {
    try {
        const user = await UserModel.findOne({ email }).exec();
        return user;
    }catch (error) {
        console.error('Error retrieving user:', error);
        return error;
    }
}