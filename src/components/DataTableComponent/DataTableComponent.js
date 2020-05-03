import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';

const DataTableComponent = () => {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const columns = [{
        name: 'Id',
        selector: 'id',
        sortable: true,
        maxWidth: '100px',
        center: true
    }, {
        name: 'Title',
        selector: 'title',
        sortable: true,
        wrap: true,
        maxWidth: '200px',
        center: true
    }, {
        name: 'Body',
        selector: 'body',
        sortable: true,
        wrap: true,
        maxWidth: '300px',
        center: true
    }];

    useEffect(() => {
        const URL = 'http://jsonplaceholder.typicode.com/posts';
        fetch(URL)
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setItems(result);
            }, error => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    } else if (!isLoaded) {
        return (
            <div>Loading...</div>
        );
    } else {
        return (
            <div className='posts' style={{'maxWidth': '700px', 'margin': '0 auto'}}>
                <p>Posts</p>
                <DataTable
                    columns={columns}
                    data={items}
                    pagination={true}
                    highlightOnHover={true}
                    responsive={true}
                />
            </div>
        );
    }
};

export default DataTableComponent;
