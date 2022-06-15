import React, { useEffect, useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [shows, setShows] = useState([])
    const [watchedList, setWatchedList] = useState([])

    useEffect(() => {
        fetch("http://localhost:8081/shows")
        .then(response => response.json())
        .then(data => { setShows(data);
         });
    }, []);

    function handleAddToWatchedList(show) {
        const foundIndex = watchedList.findIndex(item => show.id === item.id);
        if (foundIndex === -1) {
            setWatchedList([...watchedList, show]);
        } else { console.log("")
        }
    }

    function handleRemoveFromWatchedList(show) {
        const foundIndex = watchedList.findIndex(item => show.id === item.id);
        if (foundIndex === -1) {
        } else {
            const copyArray = [...watchedList];
            copyArray.splice(foundIndex, 1);

            setWatchedList(copyArray);
        }
    }


    return(
        <>
            <MyWatchList watchedList={watchedList} onRemoveFromWatchedList={handleRemoveFromWatchedList} onShowDelete={handleShowDelete}/>
            <hr/>
            <ShowList shows={shows} onAddToWatchedList={handleAddToWatchedList} onShowDelete={handleShowDelete} />
        </>
    );
}

export default ShowCatalog;