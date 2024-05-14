import React, { useState, useEffect } from "react";

const useFetchApi = (url) => {
    const [state, setState] = useState([])

    console.log({ url })
    console.log({ state })

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                let d = data.filter(d => d.id < 10)
                console.log({ d })
                // dispatch({ type: 'setComments', payload: d})
                setState(d)
            })
    }, [url])

    return {state}

}

export default useFetchApi;