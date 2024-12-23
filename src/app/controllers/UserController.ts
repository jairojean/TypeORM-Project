import {Request, Response, Router} from 'express';
import User from "../entities/Users";
import UserRepository from '../repositories/UserRepository';
import IUsers from "../interfaces/IUser";

const userRouter = Router();

userRouter.get('/',async (req: Request, res:Response): Promise<Response> =>{
    const users =await UserRepository.getUser();
})

export default userRouter;


