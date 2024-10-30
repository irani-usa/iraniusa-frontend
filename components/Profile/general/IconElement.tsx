interface IconElementProps {
    icon: React.ReactNode,
}

const IconElement: React.FC<IconElementProps> = (props) => {
  return (
      <div className="border border-white-shade-4 h-min p-2 rounded-full mx-auto w-min">
       {props.icon}
      </div>    
  );
};

export default IconElement;
