import axios from "axios";
import {Project} from "../interfaces";

const url = 'http://localhost:7000/users';

interface resProjects {
    result: { projects: [Project] };
}

export class projectRepository {
    static async getAll() {
        const {data}= await axios.get(`${url}/me`);
        const {result}: resProjects = data;
        return result;
    }
}