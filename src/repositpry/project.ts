import axios from "axios";
import { Project } from "../types";

const url = 'http://localhost:7000/project'


export class projectRepository {
    static async getAllByAuthorId(authorId: number): Promise<Project> {
        const {data}: any = await axios.get(`${url}/author/${authorId}`);
        return data?.result;
    }
}