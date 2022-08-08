import React, { useEffect } from "react";
import { Card, Collapse, Descriptions } from "antd";
import { ProjectBase, Task } from "../../types";
import FormSelectorGlobal from "../FormSelectorGlobal";
import { getTaskComments, taskCreateComment } from "../../store/task/actions";
import { useDispatch, useSelector } from "react-redux";
import { UserRootState } from "../../store/user/reducer";
import { TaskRootState } from "../../store/task/reducer";
import CommentForm from "../CommentForm";
import CommentCard from "../CommentCard";
import OptionLabel from "../OptionLabel";


const { Panel } = Collapse;

const Taskdetail: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  const authorId = useSelector((store: UserRootState) => store.user.userActive.id);
  const comments = useSelector(
    (store: TaskRootState) => store.task.taskComments[Number(task?.id || NaN)] || []
  );

  const onShowCommentBlock = (value: string | string[]) => {
    if (value && !comments.length) dispatch(getTaskComments(Number(task.id || NaN)));
  }

  useEffect(() => {

  }, [task])

  return (
    <Card
      className="task-detail"
      title={<Descriptions>
        <Descriptions.Item label="Title"> {task.title}</Descriptions.Item>
        <Descriptions.Item label="Created"> {new Date(task.createdAt).toLocaleDateString()}</Descriptions.Item>
      </Descriptions>}

      hoverable
    >
      <div className="task-detail__body">
        <Descriptions>
          <Descriptions.Item label="Description"> {task.description}</Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Status">
            <OptionLabel option={task.status} />
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            <OptionLabel option={task.type} />
          </Descriptions.Item>
          <Descriptions.Item label="Priority">
            <OptionLabel option={task.priority} />
          </Descriptions.Item>
        </Descriptions>
        <Descriptions>
          <Descriptions.Item label="Author"> {task.author.name}</Descriptions.Item>
          <Descriptions.Item label="Executor"> {task.executor.name}</Descriptions.Item>
        </Descriptions>

      </div>
      <Collapse accordion onChange={(value) => onShowCommentBlock(value)}>
        <Panel header="Comments" key={`task-${task.id}-comment-block`}>
          <CommentForm
            methodSubmitComment={taskCreateComment}
            authorId={authorId}
            projectId={null}
            taskId={Number(task.id)} />
          <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
            {comments?.map(
              (comment: { id: any; }) => <div>
                <CommentCard key={`comment-key-${comment.id}`} comment={comment} />
              </div>)}
          </div>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Taskdetail;
