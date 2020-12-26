import {data} from '../someResults';
import {menu} from '../someMenu';

export default class TableapiService {
    getCurrentData = (id, sort = "default", pagination = 1) => {
        function byField(field) {
            if (field === "id") {
                return (a, b) => a[field] - b[field];
            }
            return (a, b) => (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;
        }
        let curData;
        for (const [key, value] of Object.entries(data)) {
            if (value.id === id) {
                curData = value.data.map(el => el);
            }
        }
        if (sort != "default") {
            curData.sort(byField(sort));
        }
        if (Array.isArray(curData)) {
            return curData.slice((pagination - 1) * 10, pagination * 10);
        }
        return;
    };
    getCurrentName = (id) => {
        let name = "Exception";
        menu.forEach(el => {
            if (el.children.length > 0) {
                for (const [key, value] of Object.entries(el.children)) {
                    if (value.id === id) {
                        name = value.name;
                    }
                }
            };
        });
        return name;
    };
    getAllLength = (id) => {
        for (const [key, value] of Object.entries(data)) {
            if (value.id === id) {
                return Math.ceil(Object.keys(value.data).length / 10);
            }
        }
    }
}