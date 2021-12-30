import axios from "axios";
import {Project} from "../interfaces";

const url = 'http://localhost:7000/project';

interface resProjects {
    result: { projects: [Project] };
}

export type CreatProjectRes = {
    title: string,
    description: string,
    authorId: number,
};

export class projectRepository {
    static async getAll(userId: number) {
        const {data} = await axios.get(`${url}/author/${userId}`);
        const {result}: resProjects = data;
        return result;
    }

    static async create(params: CreatProjectRes): Promise<CreatProjectRes> {
        const {data} = await axios.post(`${url}`, params);
        const {result}: { result: Project } = data;
        return result;
    }
}