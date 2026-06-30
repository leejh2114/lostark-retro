type WindowProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
};

export default function Window({ title, icon, children, className = "" }: WindowProps) {
  return (
    <section className={`win ${className}`}>
      <div className="titlebar">
        <span className="titlebar-text" data-icon={icon}>
          {title}
        </span>
        <div className="winbtns">
          <span>_</span>
          <span>□</span>
          <span>X</span>
        </div>
      </div>
      <div className="win-body">{children}</div>
    </section>
  );
}