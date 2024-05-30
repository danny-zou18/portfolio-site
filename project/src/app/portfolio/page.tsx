import React, { useState } from "react";

import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import Timeline from "@/components/portfolio/timeline/FullProjectTimeline";

const PortfolioPage: React.FC = () => {
    return (
        <div className="w-[80%] ml-auto mr-auto flex flex-col">
            <div className="flex justify-center mt-8 mb-12">
                <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">featured projects</h1>
            </div>
            <FeaturedProjects />
            <Timeline />
        </div>
    )
}

export default PortfolioPage;