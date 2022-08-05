import React from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import { ProjectComment } from '../types';

const CommentCard: React.FC<any> = ({ comment }: { comment: ProjectComment }) => (<>
    <Comment
        content={comment.body}
        author={comment.author.name}
        datetime={new Date(comment.createdAt).toLocaleDateString()}
    />
</>);

export default CommentCard;
