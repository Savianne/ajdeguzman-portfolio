import styled from "styled-components";
import { IStyledFC } from "../types/IStyledFC";

const Path = (props:any) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="#fff"
      strokeLinecap="round"
      {...props}
    />
  );

  interface IMenuToggle extends IStyledFC {
    toggle: () => void
  }
  
  export const MenuToggleFC:React.FC<IMenuToggle> = ({ className, toggle }) => (
    <button className={className} onClick={toggle}>
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
);

const MenuToggle = styled(MenuToggleFC)`
    && {
        outline: none;
        border: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ffd0a3;
        padding: 10px;
    }

    && path {
        /* fill: yellow; */
    }
`

export default MenuToggle;
  