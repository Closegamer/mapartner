import SectionTitle from "../Common/SectionTitle";

const Noadmin = () => {
    return (
        <section id="falseadminka" className="bg-primary/5 py-16 md:py-20 lg:py-28">
            <div className="container">
                <SectionTitle
                    title="Admin tools"
                    paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                    center
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    Ты ваще не админ
                </div>
            </div>
        </section>
    );
};

export default Noadmin;
