import React from 'react'
import { useRouteError } from 'react-router-dom'

type Props = {}

const Error = (props: Props) => {
    const err:any=useRouteError();
  return (
    <div>Error
        <h2>
            {err.status+":"+err.statusText}
        </h2>
    </div>
  )
}

export default Error