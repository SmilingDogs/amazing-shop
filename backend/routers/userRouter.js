import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';


const userRouter = express.Router();

userRouter.get("/seed", expressAsyncHandler(async(req, res) => {
    await User.deleteMany({}) //* удаляет предыдущих юзеров, чтобы небыло дубликатов и ошибки
    const createdUsers = await User.insertMany(data.users) //* inserts users array [data.users] inside users Collection in MongoDB
    res.send({createdUsers})
}))

export default userRouter
