import Breadcrumb from "@/components/Common/Breadcrumb";
import Proposals from "@/components/Proposals";

const ProposalsPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Proposals Page"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />

            <Proposals />
        </>
    );
};

export default ProposalsPage;
