import React from 'react';

import Component from '@/common-components/component';

const UserProfile: React.FunctionComponent = () => {
    return (
        <div className='flex flex-col'>
            <p>This is the UserProfile page</p>
            <p>Is this working ?</p>
            <Component />
        </div>
    );
};

export default UserProfile;
