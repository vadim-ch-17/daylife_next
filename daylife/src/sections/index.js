import Banner from "./Banner"
import Advantages from "./Advantages"
import CallToActionTop from "./CallToActionTop"
import Product from "./Product"
import CallToActionBottom from "./CallToActionBottom"
import Testimonials from "./Testimonials"

const Sections = ({ activeSection }) => {
    const sectionComponents = {
        'banner': Banner,
        'advantages': Advantages,
        'callToActionTop': CallToActionTop,
        'product': Product,
        'callToActionBottom': CallToActionBottom,
        'testimonials': Testimonials
    }

    return (
        <>
            {Object.keys(sectionComponents).map((section, index) => {
                const SectionComponent = sectionComponents[section]
                if (!activeSection.includes(section)) return <SectionComponent key={index} />
            })}
        </>
    )
}

export default Sections