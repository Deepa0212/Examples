import { act, useEffect, useReducer, useState } from "react";
import useFetchApi from './hooks/useFetchApi'

const ListSection = (props) => {
    const { title, state, users } = props
    return (
        <>
            <h2>List of {title}</h2>
            <ul>
                {/* {state?.map(p => <li>
                <p><strong>{p.title}</strong></p>
                <img src={p.thumbnailUrl} height="90px" width="90px" style={{ borderRadius: '45px' }} />
                <p>{p.url}</p>
            </li>)} */}

                {state?.map(p => <li key={p.id}>
                    <p><strong>{p.name}</strong></p>
                    <p>{p.email}</p>
                </li>)}
            </ul>
        </>
    );

}

const PhotoList = () => {
    // const { comments } = useFetchApi('https://jsonplaceholder.typicode.com/comments')
    // const {users} = useFetchApi('https://jsonplaceholder.typicode.com/users')

    const [ state, dispatch] = useReducer(reducer, { comments:[], users: []})


    function reducer(state, action){
        switch(action.type){
            case 'setComments': {
                return { ...state, comments: action.payload }
            }
            case 'setUsers': {
                return { ...state, users: action.payload }
            }
        }
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then((data) => {
                let d = data.filter(d => d.id < 10)
                console.log({ d })
                dispatch({ type: 'setComments', payload: d})
            })
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log({ data })
                dispatch({ type: 'setUsers', payload: data})})
    },[])

    return (
        <div className="container-photo">

            <article>
                <ListSection title="Comments" state={state.comments} />
                <ListSection title="Users" state={state.users} />
            </article>

        </div>
    );
}

export default PhotoList;