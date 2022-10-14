import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const UserLayout = ({children}: Props) =>  {
  return (
    <>
        <div>User Layout</div>
    </>
  )
}

export default UserLayout;