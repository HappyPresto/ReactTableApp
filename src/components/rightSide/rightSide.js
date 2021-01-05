import React, { useState, useEffect } from 'react';
import Header from '../header';
import Table from '../table';
import Pagination from '../pagination';
import { withTableapiService } from '../hoc-helpers'

import './rightSide.css';

const RightSide = (props) => {
    const {getCurrentName, getCurrentData, getAllLength, id} = props;
    const [name, changeName] = useState(0);
    const [res, getRes] = useState();
    const [sort, getSortData] = useState();
    const [pagination, setPagination] = useState();
    const [paginationCount, getPaginationCount] = useState(0);

    useEffect(() => {
        getSortData();
        setPagination();
    }, [id]);

    useEffect(() => {
        changeName(getCurrentName(id));
        getRes(getCurrentData(id, sort, pagination));
        getPaginationCount(getAllLength(id));
    }, [id, sort, pagination, getCurrentName, getCurrentData, getAllLength]);

    const forSort = (columnName) => {
        getSortData(columnName);
    }

    const forSetPagination = (pagNum) => {
        setPagination(() => {
            return pagNum;
        })
    }

    return (
        <div className="rightSide">
            <Header 
                text={`${id !== "" ? name : "Название"}`}
                showHidden={false}
            />
            <Table 
                table={res}
                forSort={forSort}
            />
            <Pagination 
                pagination={paginationCount}
                getPagination={forSetPagination}
            />
        </div>
    )
};

const mapMethodsToProps = (TableapiService) => {
    return {
        getCurrentName: TableapiService.getCurrentName,
        getCurrentData: TableapiService.getCurrentData,
        getAllLength: TableapiService.getAllLength,
    }
}

export default withTableapiService(mapMethodsToProps)(RightSide);