import axios from "axios";
import {
  ProjectBase,
  Option,
  ProjectCreateParams,
  ProjectDetail,
  ActionUserWithProjectParams,
} from "../types";

const url = "http://localhost:7000/project";

export class ProjectRepository {
  static async getAllByAuthorId(authorId: number): Promise<ProjectBase[]> {
    const response: any = await axios.get(`${url}/author/${authorId}`);
    return response;
  }
  static async findOneById(projectId: number): Promise<ProjectBase> {
    const response: any = await axios.get(`${url}/${projectId}`);
    return response;
  }
  static async create(
    createProjectParams: ProjectCreateParams
  ): Promise<Option[]> {
    const response: any = await axios.post(`${url}`, createProjectParams);
    return response;
  }
  static async update(project: ProjectBase): Promise<ProjectDetail> {
    const response: any = await axios.patch(`${url}/${project.id}`, project);
    return response;
  }
  static async delete(id: number): Promise<any> {
    const response: any = await axios.delete(`${url}/${id}`);
    return response;
  }
  static async getStatuses(): Promise<Option[]> {
    const response: any = await axios.get(`${url}/statuses/all`);
    return response;
  }
  static async addUsersToProject({
    projectId,
    userIds,
  }: ActionUserWithProjectParams): Promise<any> {
    const response: any = await axios.patch(`${url}/${projectId}/users`, {
      userIds,
    });
    return response;
  }
  static async deleteUsersFromProject({
    projectId,
    userIds,
  }: ActionUserWithProjectParams): Promise<any> {
    const response: any = await axios.delete(`${url}/${projectId}/users`, {
      data: { userIds },
    });
    return response;
  }
  static async getComments(projectId: number): Promise<any> {
    const response: any = await axios.get(`${url}/${projectId}/comment/all`,);
    return response;
  }
}
