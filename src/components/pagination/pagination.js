import React from 'react';

import './pagination.css';

const CreatePagination = ({pagination, getPagination}) => {
    let items = [];
    for (let i = 1; i <= pagination; i++) {
        items.push(<li key={i} className="pagination__el" onClick={() => getPagination(i)}>{i}</li>)
    };
    return items;
}

const Pagination = (props) => {
    const {pagination} = props;
    if (pagination > 0) {
        return (
            <div className="pagination">
                <ul className="pagination__list">
                    <CreatePagination {...props}/>
                </ul>
            </div>
        )
    }
    return (<div className="pagination"></div>)
}

export default Pagination;