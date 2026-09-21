import React from "react";
import "./LandingPage.css";
import Navbars from "../Navbars";
import HeroSection from "./LandingPageComponents/Sections/HeroSection";
import StatsSection from "./LandingPageComponents/Sections/StatsSection";
import FeaturesSection from "./LandingPageComponents/Sections/FeaturesSection";
import HowItWorksSection from "./LandingPageComponents/Sections/HowItWorksSection";
import AnalyticsSection from "./LandingPageComponents/Sections/AnalyticsSection";
import EmployeeSection from "./LandingPageComponents/Sections/EmployeeSection";
import SecuritySection from "./LandingPageComponents/Sections/SecuritySection";
import CtaSection from "./LandingPageComponents/Sections/CtaSection";
import Footer from "../Footer";

const LandingPage: React.FC = () => {
    
    return (
        <div className="landing-page">

            {/* ================= NAVBAR ================= */}
                <Navbars />

            {/* ================= HERO ================= */}
                <HeroSection />

            {/* ================= STATS ================= */}
                <StatsSection />

            {/* ================= FEATURES ================= */}
                <FeaturesSection />    

            {/* ================= HOW IT WORKS ================= */}
                <HowItWorksSection />

            {/* ================= ANALYTICS ================= */}
                <AnalyticsSection />
                
            {/* ================= EMPLOYEE ================= */}
                <EmployeeSection />

            {/* ================= SECURITY ================= */}
                <SecuritySection />
            
            {/* ================= CTA ================= */}
                <CtaSection />

            {/* ================= FOOTER ================= */}
                <Footer />

        </div>
    );
};

export default LandingPage;