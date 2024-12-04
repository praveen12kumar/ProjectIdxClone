import React from 'react'
import usePing from '../../hooks/apis/queries/usePing';

const PingComponent = () => {
    const {isLoading, isError, error, data} = usePing();

    if(isLoading){
      return (
        <>
          Loading...
        </>
      )
    }
  
    return (
      <>
        Hello
        <p>{data?.message}</p>
      </>
    )
  }


export default PingComponent