import {
    Form,
    Select,
} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectStatuses } from '../store/project/actions';
import { getTaskPriorities, getTaskStatuses, getTaskTypes } from '../store/task/actions';
import { OptionGlobal } from '../types';
import validationRules from '../utils/validation-rules'

const FormSelectorGlobal: React.FC<{
    value: OptionGlobal | null,
    name: string;
    label: string;
    domainName: string;
    entityName: string;
    selectorName: string;
    onSelect: (value: number) => void;
}> = ({
    name,
    value,
    label,
    domainName,
    entityName,
    selectorName,
    onSelect,
}) => {
        const dispatch = useDispatch();
        const valueDefault = value || { id: '', name: '', value: '' };
        const entityList = useSelector((store: any) => store[domainName][selectorName] || []);
        const options = !entityList.length ? [valueDefault] : entityList;
        const domainActions: any = {
            'project': {
                'status': getProjectStatuses,
            },
            'task': {
                'status': getTaskStatuses,
                'type': getTaskTypes,
                'priority': getTaskPriorities,
            },
        };

        const onActiveSelect = () => !entityList?.length && dispatch(domainActions[domainName][entityName]());

        const handleChange = (value: any) => {
            onSelect(Number(value));
        };
        handleChange(Number(valueDefault?.id));

        return (<>
            <Form.Item name={name} label={label} rules={
                validationRules.selector({ domainName, entityName })}>
                <Select
                    onFocus={onActiveSelect}
                    onChange={handleChange}
                >
                    {options.map(
                        (option: any) => <Select.Option
                            key={`${option.id}-${option.name}`}
                            value={option.id
                            }>{option.name}</Select.Option>,
                    )}
                </Select>
            </Form.Item>
        </>
        );
    };

export default FormSelectorGlobal;