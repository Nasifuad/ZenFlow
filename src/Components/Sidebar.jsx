const Sidebar = ({ navLinks, onClose }) => {
  return (
    <div className=" fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
      <button
        className="bg-white border border-slate-gray rounded-full p-2 absolute top-10 right-7 text-slate-gray text-lg font-bold"
        onClick={onClose}
      >
        ✕
      </button>

      <ul className="pt-20 py-10 flex flex-1 flex-col justify-center items-center gap-8 w-full ">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-montserrat leading-normal text-xl text-slate-gray
                hover:text-slate-900 hover:scale-110 transition-all"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
