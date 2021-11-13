import React from 'react';
import Header from "./Header";

const BaseLayout: React.FC<any> = ({children}) => (<div className='base-layout'>
    <Header/>
    {children}
</div> );

export default BaseLayout;
