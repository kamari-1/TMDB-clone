import Switch from "../../baseUI/Switch";

const Section = ({ title, children, ...props }) => {
  return (
    <section className="pt-[30px] pl-10">
      <div className="flex items-center gap-5">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <Switch {...props} />
      </div>
      <div className="pt-5 relative">{children}</div>
    </section>
  );
};

export default Section;
