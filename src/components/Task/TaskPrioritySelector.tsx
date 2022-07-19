import {
    Form,
    Select,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskPriorities } from '../../store/task/actions';
import { TaskRootState } from '../../store/task/reducer';
import { Option } from '../../types';

const TaskPrioritySelector: React.FC<{ priority: Option | null, onSelectPriority: (value: number) => void }> = ({
    priority,
    onSelectPriority,
}) => {
    const dispatch = useDispatch();
    const priorityDefault = priority || { id: '', name: '' };
    const priorities = useSelector((store: TaskRootState) => store.task.priorities);
    const statusOptins = !priorities.length ? [priorityDefault] : priorities;

    const onActiveSelectPriority = () => {
        if(priorities?.length) return;
        dispatch(getTaskPriorities())
    };

    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        onSelectPriority(Number(value.value));
      };

    return (<>
        <Form.Item name="priority" label="Priority" rules={[{
            required: true,
            message: 'Please select task priority',
        }]}>
            <Select
                onFocus={onActiveSelectPriority}
                onChange={ handleChange }
            >
                {statusOptins.map(
                    (priority: any) => <Select.Option
                        key={`${priority.id}-${priority.name}`}
                        value={priority.id
                        }>{priority.name}</Select.Option>,
                )}
            </Select>
        </Form.Item>
    </>
    );
};

export default TaskPrioritySelector;