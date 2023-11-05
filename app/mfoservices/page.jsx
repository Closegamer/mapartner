import Breadcrumb from "@/components/Common/Breadcrumb";
import Mfoservone from "@/components/Mfoservone";
import Mfoservtwo from "@/components/Mfoservtwo";
import MfoservCZone from "@/components/MfoservCZone";
import MfoservCZtwo from "@/components/MfoservCZtwo";

const ServicesPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Сервисы по подбору вариантов финансирования"
                description="Россия и Казахстан"
            />

            <Mfoservone />
            <Mfoservtwo />
            <hr />
            <MfoservCZone />
            <MfoservCZtwo />
        </>
    );
};

export default ServicesPage;
