import { Badge, Tag } from 'antd';
import React from 'react';
import { ColorTypes, Option } from '../types';

const OptionLabel: React.FC<any> = ({ option }: { option: Option }) => {
    

    const typeById: { [key: number | string]: ColorTypes } = {
        1: 'success',
        2: 'warning',
        3: 'error',
        4: 'processing',
    }

    const colorStatus = typeById[option?.id] || 'default'; 

    return (<Badge status={`${colorStatus}`} text={option?.name || ''} />)
    // return (<Tag color={colorStatus} >{ option?.name || '' }</Tag>)
};

export default OptionLabel;
