import React, { useState } from "react";

import FeaturedProjects from "@/components/portfolio/FeaturedProjects";

const PortfolioPage: React.FC = () => {
    return (
        <div className="w-[80%] ml-auto mr-auto">
            <h1 className="text-4xl font-bold text-primary">Portfolio</h1>
            <FeaturedProjects />
        </div>
    )
}

export default PortfolioPage;