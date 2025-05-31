import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import buttonBg from 'resources/button/button.png';


interface Props {
  className?: string;
  type?: "default" | "primary" | "primary-inverse";
  children?: React.ReactNode | string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const cx = classNames.bind(styles);

const Button: React.FC<Props> = ({
  className,
  children,
  type = "default",
  onClick,
}) => {
  const btnStyle: any = {};

  if (type === "default") {
    btnStyle.backgroundImage = `url(${buttonBg})`;
    btnStyle.backgroundSize = 'contain';
    btnStyle.backgroundRepeat = 'no-repeat';
    btnStyle.backgroundPosition = 'center';
    btnStyle.color = '#101010';
    btnStyle.padding = '14px 35px'; // tweak if needed
    btnStyle.textShadow = '1px 1px 0 #ffffff55, -1px -1px 0 #000000aa';


    
  } else if (type === "primary") {
    btnStyle.backgroundColor = "#333333";
    btnStyle.color = "#ffffff";
  } else if (type === "primary-inverse") {
    btnStyle.color = "#241200";
    btnStyle.border = "1px solid #241200";
  }

  return (
    <div className={cx("btn", className)} style={btnStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
