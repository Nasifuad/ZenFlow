import React from "react";

const FooterLinks = ({ footerLinks }) => {
  const { title, links } = footerLinks;
  return (
    <div key={title}>
      <h1 className="font-palanquin text-2xl leading-[30px] mb-5">{title}</h1>
      <div>
        {links.map((link, index) => (
          <p
            key={index}
            className="font-montserrat text-slate-500 leading-[30px] mb-2 hover:cursor-pointer hover:text-coral-red transition-all"
          >
            {link.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
