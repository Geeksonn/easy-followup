import React from 'react';

type DashboardProps = {
    params: { slug: string };
};
const Dashboard: React.FunctionComponent<DashboardProps> = ({ params }) => {
    return (
        <main>
            <h1>Dashboard {params.slug} </h1>
            <div>Lorem Ipsum</div>
        </main>
    );
};

export default Dashboard;
