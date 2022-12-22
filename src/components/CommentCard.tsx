import React from 'react';
import { Comment } from 'antd';
import { FileImageOutlined } from "@ant-design/icons";

import { ProjectComment } from '../types';

const CommentCard: React.FC<any> = ({ comment }: { comment: ProjectComment }) => (<>
    <Comment
        content={<p style={{ textAlign: 'start' }}>
            {comment.body}
        </p>}
        avatar={ <FileImageOutlined style={{fontSize: '2rem'}} /> }
        author={
            <div>
                <b>{comment.author.name}</b>
            </div>
        }
        datetime={new Date(comment.createdAt).toLocaleDateString()}
    />
    <hr />
</>);

export default CommentCard;
