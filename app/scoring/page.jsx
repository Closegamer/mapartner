import Scoring from "@/components/Scoring";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ScoringPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Проверка кредитной истории"
                description="Быстро и достоверно."
            />
            <Scoring />
        </>
    );
};

export default ScoringPage;
