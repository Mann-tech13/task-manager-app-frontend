/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { ManageSVG, CalendarSVG } from "../../assets/icons/icons";

function SidebarIcon(props) {
  const SidebarMenuOptions = [
    {
      option: "Manage",
      icon: <ManageSVG fill={props.fill} />,
    },
    {
      option: "Calendar",
      icon: <CalendarSVG fill={props.fill} />,
    },
  ];

  const filteredOptions = SidebarMenuOptions.filter((ele) => {
    return ele.option === props.option;
  });
  return filteredOptions.length > 0 ? filteredOptions[0].icon : null;
}

export default SidebarIcon;
