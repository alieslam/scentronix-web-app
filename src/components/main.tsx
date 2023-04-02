import React, { ReactNode } from 'react';
import Header from './header';
import Navigation from './navigation';

interface Props {
    children: ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props) => {
    return <>
        <div>
            <Header />
            <Navigation />
        </div>
        {children}</>;
};


export default Main;