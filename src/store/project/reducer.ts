import {
  actionTypes,
  ADD_CRAETED_PROJECT,
  DELETE_PROJECT,
  SET_COMMENTS,
  SET_PROJECT,
  SET_PROJECT_BY_AUHTOR,
  SET_STATUSES,
  SET_USERS,
  UNSET_USERS,
} from "./types";
import { Option, ProjectBase, ProjectComment, ProjectDetail } from "../../types";

export type ProjectState = {
  projects: ProjectBase[];
  projectsDetail: ProjectDetail[];
  statuses: Option[];
  projectComments: ProjectComment[];
};

export type ProjectRootState = {
  project: ProjectState;
};

const initialState = {
  projects: [],
  projectsDetail: [],
  statuses: [],
  projectComments: [],
};

export const projectReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case SET_PROJECT_BY_AUHTOR:
      return { ...state, projects: action.payload };
    case SET_PROJECT:
      return {
        ...state,
        projectsDetail: {
          ...state.projectsDetail,
          [action.payload.id]: action.payload,
        },
      };
    case ADD_CRAETED_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project: ProjectBase) => project.id !== action.payload
        ),
      };
    case SET_USERS:
      const { projectId, users } = action.payload;
      const currentProject: ProjectDetail = state.projectsDetail[projectId];
      const updatedProject = {
        ...currentProject,
        team: [...currentProject?.team, ...users],
      };
      return {
        ...state,
        projectsDetail: {
          ...state.projectsDetail,
          [projectId]: updatedProject,
        },
      };
    case UNSET_USERS:
      const params = action.payload;
      const userIds = params.users.map((user) => user.id);
      const currentProjectOnDeleteUsers: ProjectDetail = state.projectsDetail[params.projectId];
      const updatedProjectAfterDeleteUsers = {
        ...currentProjectOnDeleteUsers,
        team: currentProjectOnDeleteUsers?.team.filter(({ id }) => !userIds.includes(id)),
      };
      return {
        ...state,
        projectsDetail: {
          ...state.projectsDetail,
          [params.projectId]: updatedProjectAfterDeleteUsers,
        },
      };
    case SET_STATUSES:
      return {
        ...state,
        statuses: action.payload,
      };
      case SET_COMMENTS:
        if (!action?.payload?.length) return state;
        const comment: ProjectComment = action.payload[0]
        return {
            ...state, projectComments: {
                ...state.projectComments,
                [comment.projectId]: action.payload
            }
        };
    default:
      return state;
  }
};
