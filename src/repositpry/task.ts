import axios from "axios";
import { Option, Task, TaskCreateParams, TaskUpdateParams } from "../types";

const url = 'http://localhost:7000/tasks'


export class taskRepository {
    static async getAllTasksByProjectId(projectId: number): Promise<Task[]> {
        const {data}: any = await axios.get(`${url}/project/${projectId}`);
        return data?.result;
    }
    static async findOneById(taskId: number): Promise<Task> {
        const {data}: any = await axios.get(`${url}/${taskId}`);
        return data?.result;
    }
    static async create(taskCreatreateParams: TaskCreateParams): Promise<Option[]> {
        const {data}: any = await axios.post(`${url}`, taskCreatreateParams);
        return data?.result;
    }
    static async update(task: TaskUpdateParams): Promise<Task> {
        const {data}: any = await axios.patch(`${url}/${task.id}`, task);
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
    static async getTypes(): Promise<Option[]> {
        const {data}: any = await axios.get(`${url}/types/all`);
        return data?.result;
    }
    static async getPriorities(): Promise<Option[]> {
        const {data}: any = await axios.get(`${url}/priorities/all`);
        return data?.result;
    }
}