import { useEffect, isValidElement, Children, cloneElement, createElement } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { TDropdownProps } from '@/@types/components/molecules';

const Dropdown = ({
  menus,
}: TDropdownProps) => {

  useEffect(() => {
    const init = async () => {
      const { Dropdown, initTWE } = await import('tw-elements');
      initTWE({ Dropdown });
    };

    init();

  }, []);

  const renderMenu = (el: any, key: number) => {
    if(isValidElement(el)) {
      return createElement(
        'li',
        {
          className: 'py-1',
          role: 'none',
          children: cloneElement(
            el as any,
            {
              role: "menuitem",
              tabIndex: "-1",
              id: `menu-item-${key}`
            },
          ) 
        },
      );
    } else return;
  };

  return (
    <div className="relative inline-block text-left">
      <button
        data-twe-ripple-init
        type="button"
        id="menu-button" 
        data-twe-dropdown-toggle-ref
        aria-expanded="true"
        className="cursor-pointer p-2 rounded-full hover:bg-[#3d3b3b]/[0.20] transition duration-400 ease-in"
      >
        <CiMenuKebab />
      </button>
      <ul 
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
        aria-labelledby="menu-button"
        data-twe-dropdown-menu-ref
      >
        {Children.map(menus, renderMenu)}
        {/* <li className="py-1" role="none">
          <a 
            href="#" 
            className="flex items-center text-[#4e6af5] gap-2 block px-4 py-2 text-sm text-gray-700" role="menuitem" tab-index="-1" id="menu-item-0"
          >
            <FaCheck />
            Completed
          </a>
        </li>
        <li className="py-1" role="none">
          <a 
            href="#" 
            className="flex items-center text-[#f5f114] gap-2 block px-4 py-2 text-sm text-gray-700" role="menuitem" tab-index="-1" id="menu-item-0"
          >
            <MdEdit />
            Edit
          </a>
        </li>
        <li className="py-1" role="none">
          <a 
            href="#" 
            className="flex items-center text-[#f01326] gap-2 block px-4 py-2 text-sm text-gray-700" role="menuitem" tab-index="-1" id="menu-item-0"
          >
            <MdDelete />
            Delete
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Dropdown;