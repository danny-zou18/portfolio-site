import React, { useState } from "react";

import FeaturedProjects from "@/components/portfolio/FeaturedProjects";

const PortfolioPage: React.FC = () => {
    return (
        <div className="w-[80%] ml-auto mr-auto">
            <div className="flex justify-center mt-12 mb-12">
                <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">featured projects</h1>
            </div>
            
            <FeaturedProjects />
        </div>
    )
}

export default PortfolioPage;