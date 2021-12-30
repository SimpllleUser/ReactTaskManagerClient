import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Button, Col, Row} from "antd";
import ProjectForm from "../components/Project/ProjectForm";
import {Project, User} from "../interfaces";
import {getProjects} from "../store/projects/actions";
import ProjectCard from "../components/Project/ProjectCard";

const Projects: React.FC = ({...value}): any => {
    const dispatch = useDispatch();

    const currentUser: User = useSelector((state: any) => state.users).currentUser;
    const projects: [Project] = useSelector((state: any) => state.projects).projects;
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (!currentUser?.id) return;
        dispatch(getProjects(currentUser.id));
    }, [currentUser]);

    const projectList = projects.map((project: Project) => <Col span={8} style={{marginBottom: '10px'}}
                                                                key={`project-id-${project.id}`}><ProjectCard
        project={project}/></Col>)

    return (<div className='home-page'>
        <div style={{marginBottom: '10px'}}><h1>Projects page</h1>
            <Button type="primary" onClick={() => setIsModalVisible(true)}>Create</Button>
        </div>
        <Row gutter={16}> {projectList}</Row>
        <ProjectForm isModalVisible={isModalVisible} authorId={currentUser.id} setVisibleModal={setIsModalVisible}/>
    </div>)
};

export default Projects;
