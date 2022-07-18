import axios from "axios";
import { ProjectBase, Option, ProjectCreateParams, ProjectDetail } from "../types";

const url = 'http://localhost:7000/project'


export class projectRepository {
    static async getAllByAuthorId(authorId: number): Promise<ProjectBase[]> {
        const {data}: any = await axios.get(`${url}/author/${authorId}`);
        return data?.result;
    }
    static async findOneById(projectId: number): Promise<ProjectBase> {
        const {data}: any = await axios.get(`${url}/${projectId}`);
        return data?.result;
    }
    static async create(createProjectParams: ProjectCreateParams): Promise<Option[]> {
        const {data}: any = await axios.post(`${url}`, createProjectParams);
        return data?.result;
    }
    static async update(project: ProjectBase): Promise<ProjectDetail> {
        const {data}: any = await axios.patch(`${url}/${project.id}`, project);
        return data?.result;
    }
    static async delete(id: number): Promise<any> {
        const {data}: any = await axios.delete(`${url}/${id}`);
        return data?.result;
    }
    static async getStatuses(): Promise<Option[]> {
        const {data}: any = await axios.get(`${url}/statuses/all`);
        return data?.result;
    }
}