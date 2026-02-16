import Hero from '@/components/Hero/Hero';
import ReadyMadeBots from '@/components/ReadyMadeBots/ReadyMadeBots';
import CustomAI from '@/components/CustomAI/CustomAI';
import TechStack from '@/components/TechStack/TechStack';
import Achievements from '@/components/Achievements/Achievements';
import OurApproach from '@/components/OurApproach/OurApproach';
import Industries from '@/components/Industries/Industries';
import WhyChoose from '@/components/WhyChoose/WhyChoose';
import ContactCTA from '@/components/ContactCTA/ContactCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <ReadyMadeBots />
            <CustomAI />
            <TechStack />
            <Achievements />
            <OurApproach />
            <Industries />
            <WhyChoose />
            <ContactCTA />
        </>
    );
}
