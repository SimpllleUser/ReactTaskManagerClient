import {
    Form,
    Select,
} from 'antd';
import React from 'react';
import { Option, OptionGlobal } from '../../types';

const TaskFormSelector: React.FC<{
    label: string;
    name: string;
    selectedOption: OptionGlobal;
    options: Option[] | OptionGlobal[];
    onFocus: () => void;
    onChange: () => void;
 }> = ({
    label,
    name,
    selectedOption,
    options,
    onFocus,
    onChange,
}) => {
    // const dispatch = useDispatch();
    // const statusDefault = selectedOption || { id: '', name: '' };
    // const statuses = useSelector((store: TaskRootState) => store.task.statuses);
    // const statusOptins = !statuses.length ? [statusDefault] : statuses;

    // const onActiveSelectStatus = () => !statuses?.length && dispatch(getTaskStatuses());

    // const handleChange = (value: any) => {
    //     onSelectOption(Number(value));
    //   };
    //   handleChange(Number(statusDefault?.id));

    return (<>
        <Form.Item name={name} label={label} rules={[{
            required: true,
            message: 'Please select task status',
        }]}>
            <Select
                onFocus={onFocus}
                onChange={ onChange }
            >
                {options.map(
                    (option: OptionGlobal | Option) => <Select.Option
                        key={`${option.id}-${option.name}`}
                        value={option.id
                        }>{option.name}</Select.Option>,
                )}
            </Select>
        </Form.Item>
    </>
    );
};

export default TaskFormSelector;