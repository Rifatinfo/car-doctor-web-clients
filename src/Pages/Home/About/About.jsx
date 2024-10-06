import person1 from "../../../assets/images/about_us/person.jpg";
import person2 from "../../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img
                        src={person1}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={person2}
                        className="w-1/2 rounded-lg shadow-2xl absolute right-4 top-1/2 border-8 border-white" />
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-orange-500">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                    </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;