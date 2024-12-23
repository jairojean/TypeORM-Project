import User from "../entities/Users";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const UserRepository = AppDataSource.getRepository(User);

const getUser = (): Promise<IUser[]> =>{
    return UserRepository.find();
}
export default { getUser };