import axios from "axios";
import { Project, Option } from "../types";

const url = 'http://localhost:7000/project'


export class projectRepository {
    static async getAllByAuthorId(authorId: number): Promise<Project[]> {
        const {data}: any = await axios.get(`${url}/author/${authorId}`);
        return data?.result;
    }
    static async findOneById(projectId: number): Promise<Project> {
        const {data}: any = await axios.get(`${url}/${projectId}`);
        return data?.result;
    }
    static async getStatuses(): Promise<Option[]> {
        const {data}: any = await axios.get(`${url}/statuses/all`);
        return data?.result;
    }
}