import AddProposalBanner from "@/components/Proposals/AddProposalBanner";

const Proposals = () => {
    return (
        <section id="proposals" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s
              "
                        >
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Proposal N1
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Our support team will get back to you ASAP via email.
                            </p>

                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        <AddProposalBanner />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proposals;
