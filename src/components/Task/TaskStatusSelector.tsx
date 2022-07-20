import {
    Form,
    Select,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskStatuses } from '../../store/task/actions';
import { TaskRootState } from '../../store/task/reducer';
import { OptionGlobal } from '../../types';

const TaskStatusSelector: React.FC<{ status: OptionGlobal | null, onSelectStatus: (value: number) => void }> = ({
    status,
    onSelectStatus,
}) => {
    const dispatch = useDispatch();
    const statusDefault = status || { id: '', name: '' };
    const statuses = useSelector((store: TaskRootState) => store.task.statuses);
    const statusOptins = !statuses.length ? [statusDefault] : statuses;

    const onActiveSelectStatus = () => {
        if(statuses?.length) return;
        dispatch(getTaskStatuses())
    };

    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        onSelectStatus(Number(value.value));
      };

    return (<>
        <Form.Item name="status" label="Status" rules={[{
            required: true,
            message: 'Please select task status',
        }]}>
            <Select
                onFocus={onActiveSelectStatus}
                onChange={ handleChange }
            >
                {statusOptins.map(
                    (status: any) => <Select.Option
                        key={`${status.id}-${status.name}`}
                        value={status.id
                        }>{status.name}</Select.Option>,
                )}
            </Select>
        </Form.Item>
    </>
    );
};

export default TaskStatusSelector;