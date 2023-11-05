import Mfoone from "@/components/Mfoone/";
import Mfotwo from "@/components/Mfotwo/";
import Mfothree from "@/components/Mfothree/";
import Mfofour from "@/components/Mfofour/";
import Mfofive from "@/components/Mfofive/";
import MfoCZone from "@/components/MfoCZone/";
import MfoCZtwo from "@/components/MfoCZtwo/";
import MfoCZthree from "@/components/MfoCZthree/";
import Breadcrumb from "@/components/Common/Breadcrumb";

const MFOPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Быстрые кредиты"
                description="Россия и Казахстан"
            />

            <Mfofive />
            <Mfotwo />
            <Mfoone />
            <Mfothree />
            <Mfofour />
            <hr />
            <MfoCZone />
            <MfoCZtwo />
            <MfoCZthree />
        </>
    );
};

export default MFOPage;
