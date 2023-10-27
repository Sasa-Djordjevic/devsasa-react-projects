import React, {Fragment} from "react";

import Hero from "../components/home/Hero";
import BasicProjects from "../components/home/BasicProjects";
import AdvancedProjects from "../components/home/AdvancedProjects";

const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <BasicProjects />
            <AdvancedProjects />
        </Fragment>
    );
};

export default HomePage;