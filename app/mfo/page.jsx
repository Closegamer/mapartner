import Mfoone from "@/components/Mfoone/";
import Mfotwo from "@/components/Mfotwo/";
import Mfothree from "@/components/Mfothree/";
import Mfofour from "@/components/Mfofour/";
import Breadcrumb from "@/components/Common/Breadcrumb";

const MFOPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Быстрые деньги"
                description="Выдача в течение нескольких минут."
            />

            <Mfoone />
            <Mfotwo />
            <Mfothree />
            <Mfofour />
        </>
    );
};

export default MFOPage;
