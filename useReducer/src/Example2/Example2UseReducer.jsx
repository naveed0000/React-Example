import  { useReducer } from 'react'

const initalState = { 
    data:[],
    loading: false,
    error: null
}
// const deleteData = (id) => { 
//     dispatch({type: 'DELETE_DATA', payload : id });
// }
function reducer(state, action) { 
    console.log(state, action)
    switch(action.type) { 
        case 'FETCH_DATA_START':
            return {...state, loading :true};
        case 'FETCH_DATA_SUCCESS': 
            return {loading :false, error : null, data: action.payload};
        case 'FETCH_DATA_FAILURE':
            return {...state, loading :false, error: action.payload};
        case 'DELETE_DATA':
            return {...state, data : state.data.filter((item) => 
                    item.id !== action.payload
            ) }
        case 'ADD_DATA': 
            return {
                ...state,
                data:[...state.data,action.payload]
            }
                    
    }
                
}
            // const deleteData = (id) => { 
            // console.log(id, "this is id")
            // //  dispatch({type: 'DELETE_DATA', payload : id });
            // }

  
            
function Example2UseReducer() {
    const [state, dispatch] = useReducer(reducer, initalState)

    const fetchData = async () => {
        dispatch({type: 'FETCH_DATA_START'});
        try { 
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            dispatch({type : 'FETCH_DATA_SUCCESS', payload: data})
            console.log(data)
        }catch(error) { 
            dispatch({type: 'FETCH_DATA_FAILURE', payload :error.message});
        }
    }

    // const addData = () =>  { 
    //     dispatch({type: 'ADD_DATA', payload : newData})
    // }
    const deleteData = (id) => { 
        console.log(id, "this is id")
         dispatch({type: 'DELETE_DATA', payload : id });
    }
    const addData = (newData) =>  { 
        dispatch({type: 'ADD_DATA', payload : newData})
    }
  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        {state.loading && <p>Loading ...</p>}
        {state.loading && <p>Error :{state.error}</p>}
        <ol>
            {state.data.map((item) => {
               return <li key={item.id}>
                    {item.title}
                    {' '}
                    <button onClick={() => deleteData(item.id)}>Delete</button>
                </li>
            } )}
        </ol>
        <form onSubmit={(e) => {
            e.preventDefault();
            addData({
                id:Date.now(), 
                title:e.target.title.value, 

            })
        }} >
            <input type="text" name="title" placeholder='Add new items' />
            <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Example2UseReducer