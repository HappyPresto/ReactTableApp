import React from 'react';
import './table.css';

const CreateResults = ({table}) => {
    let items = [];
    for (let item of table) {
        let children = [];
        for (const [key, value] of Object.entries(item)) {
            children.push(<td key={key}>{value}</td>);
        }
        items.push(<tr key={items.length}>{children}</tr>);
    }
    return items;
}

const Table = ({table, forSort}) => {
    const sortTable = (columnName) => {
        forSort(columnName);
    }

    if (table) {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => sortTable("id")}>№</th>
                        <th onClick={() => sortTable("to")}>ДО</th>
                        <th onClick={() => sortTable("place")}>Месторождение</th>
                        <th onClick={() => sortTable("kc")}>КС</th>
                        <th onClick={() => sortTable("ky")}>КУ</th>
                        <th onClick={() => sortTable("date")}>Дата</th>
                        <th onClick={() => sortTable("value")}>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    <CreateResults table={table}/>
                </tbody>
            </table>
        )
    }

    return (
        <div className="table">Выберите журнал из меню</div>
    )

}

export default Table;