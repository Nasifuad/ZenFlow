import { socialMedia } from "../constants";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";
import FooterLinks from "../Components/FooterLinks";
const Footer = () => {
  return (
    <section className="max-container text-white flex flex-col gap-10">
      <div className=" text-white flex gap-10">
        <div className="flex flex-col gap-5">
          <a href="/" className="opacity-90 filter cursor-pointer">
            <img src={footerLogo} alt="Logo" width={130} height={29} />
          </a>
          <p className="font-montserrat text-sm leading-[30px] w-[330px] text-start">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your Perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social) => {
              return (
                <div className="p-2 w-max bg-white rounded-full">
                  <img src={social.src} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex  justify-around w-full">
          {footerLinks.map((link) => {
            return <FooterLinks footerLinks={link} />;
          })}
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-sm ">© 2021 Nasif Fuad. All Rights Reserved</p>
        <p className="text-sm ">Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
<div className="max-container absolute bottom-0 flex justify-between ">
  <p>© 2021 Nasif Fuad. All Rights Reserved</p>
  <p>Terms & Conditions</p>
</div>;
