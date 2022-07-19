import {
    Form,
    Select,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskTypes } from '../../store/task/actions';
import { TaskRootState } from '../../store/task/reducer';
import { Option } from '../../types';

const TaskTypeSelector: React.FC<{ type: Option | null, onSelectType: (value: number) => void }> = ({
    type,
    onSelectType,
}) => {
    const dispatch = useDispatch();
    const typeDefault = type || { id: '', name: '' };
    const types = useSelector((store: TaskRootState) => store.task.types);
    const statusOptins = !types.length ? [typeDefault] : types;

    const onActiveSelectType = () => {
        if(types?.length) return;
        dispatch(getTaskTypes())
    };

    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value);
        onSelectType(Number(value.value));
      };

    return (<>
        <Form.Item name="type" label="Type" rules={[{
            required: true,
            message: 'Please select task type',
        }]}>
            <Select
                onFocus={onActiveSelectType}
                onChange={ handleChange }
            >
                {statusOptins.map(
                    (type: any) => <Select.Option key={`${type.id}-${type.name}`}
                        value={type.id
                        }>{type.name}</Select.Option>,
                )}
            </Select>
        </Form.Item>
    </>
    );
};

export default TaskTypeSelector;