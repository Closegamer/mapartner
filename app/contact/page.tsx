import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Управление рассылкой"
        description="Здесь Вы можете подключить или отключить рассылку. Просто введите Ваш email в соответствующее поле."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
