import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchData from '../Store/thunk/fetchData';

const UserList = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })
   const arr=data.data

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    return (
        <>
        {
            arr.map((xd)=>{
                return(
                    <div key={xd.id}>{xd.title}</div>
                )
            })
        }
        </>
    )

}

export default UserList