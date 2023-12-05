import PropTypes from 'prop-types'; // Dodaj import prop-types
import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import {container, element} from './DynamicList.module.scss';

export const DynamicList = ({ n }) => {

    const [list, setList] = useState([])

    useEffect(() => {
        const list_ = []
        for(let i=1; i<=n; i++){
            list_.push({id: uuidv4(), value: "List element "+i})
        }
        setList(list_)
    },[n])

    return (
        <div className={`${container}`}>
            <ul>
                {list.map((el) => (
                   <li key={el.id} className={`${element}`}>{el.value}</li> 
                ))}
            </ul>
        </div>
        
    );
};


DynamicList.propTypes = {
    n: PropTypes.number.isRequired
};  