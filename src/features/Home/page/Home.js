import React from 'react';
import { OuterLayout } from "../styles/Layouts";
import CardSection from "../component/CardSection";

function Home(props) {

    return (
        <div>
            <OuterLayout>
                <CardSection />
            </OuterLayout>
        </div >
    );
}

export default Home;