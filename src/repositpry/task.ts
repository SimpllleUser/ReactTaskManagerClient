import axios from "axios";
import { Option, Task, TaskCreateParams, TaskUpdateParams } from "../types";

const url = 'http://localhost:7000/tasks'


export class taskRepository {
    static async getAllTasksByProjectId(projectId: number): Promise<Task[]> {
        const response: any = await axios.get(`${url}/project/${projectId}`);
        return response
    }
    static async findOneById(taskId: number): Promise<Task> {
        const response: any = await axios.get(`${url}/${taskId}`);
        return response
    }
    static async create(taskCreatreateParams: TaskCreateParams): Promise<Option[]> {
        const response: any = await axios.post(`${url}`, taskCreatreateParams);
        return response
    }
    static async update(task: TaskUpdateParams): Promise<Task> {
        const response: any = await axios.patch(`${url}/${task.id}`, task);
        return response
    }
    static async delete(task: Task): Promise<any> {
        const response: any = await axios.delete(`${url}/${task.id}`);
        return response
    }
    static async getStatuses(): Promise<Option[]> {
        const response: any = await axios.get(`${url}/statuses/all`);
        return response
    }
    static async getTypes(): Promise<Option[]> {
        const response: any = await axios.get(`${url}/types/all`);
        return response
    }
    static async getPriorities(): Promise<Option[]> {
        const response: any = await axios.get(`${url}/priorities/all`);
        return response
    }
}