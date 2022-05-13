import React from 'react'
import { Outlet ,useSearchParams } from 'react-router-dom'

function Users() {

    const [searchParams,setSearchParams]=useSearchParams();
  return (
    <div>
        <h2>User1</h2>
        <h2>User2</h2>
        <h2>User3</h2>
        <Outlet/>
        <div>
            <button onClick={()=> setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={()=> setSearchParams({})}>Reset Filter</button>
        </div>
    </div>
  )
}

export default Users