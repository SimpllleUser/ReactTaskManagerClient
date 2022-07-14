export interface OptionGlobal {
    id: number;
    value: number;
    named: number;
}
export interface Project {
    id: number;
    title: string;
    description: string;
    authorId: number;
    statusId: number;
    createdAt: string;
    updatedAt: string;
    team: User[];
    tasks: Task[];
}

export interface User {
    id: number;
    login: string;
    name: string;
    isActive: boolean;
}
export interface Task {
    id: number;
    title: string;
    description: string;
    authorId: number;
    projectId: number;
    statusId: number;
    typeId: number;
    priorityId: number;
    executorId: number;
    createdAt: string;
    updatedAt: string;
    author: User;
    project: Project;
    status: OptionGlobal;
    type: OptionGlobal;
    priority: OptionGlobal;
    executor: User;
}