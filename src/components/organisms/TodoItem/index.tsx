import { Input } from "@/components/atoms";
import { Dropdown } from "@/components/molecules";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TTodoItemProps } from "@/@types/components/organisms";

const TodoItem = ({ 
  item,
  handleChangeCheckbox,
  handleChangeComplete,
  handleEditTodo,
  handleDeleteTodo,
}: TTodoItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import('tw-elements');
      initTWE({ Ripple });
    };

    init();
  }, []);

  const handleEnterEdit = (e:any) => {
    if(e?.keyCode === 13) {
      handleEditTodo(e.target.value, item?.id)
      setIsEdit(false);
    }
  };

  return (
    <div
      className="flex justify-between items-center justify-center gap-2 w-full p-4"
    >
      <div className="flex gap-2 w-full">
        <Input
          type="checkbox"
          checked={item?.checked}
          onChange={() => handleChangeCheckbox(item?.id)}
        />
        <div className="w-full flex-auto">
          {!isEdit ? (
            <span
              className={classNames(
                `text-[#3d3b3b] font-medium`,
                {
                  'line-through': item?.completed
                }
              )}
            >
              {item?.todo}
            </span>
          ) : (
            <Input
              className="w-full"
              defaultValue={item?.todo}
              onKeyDown={handleEnterEdit}
            />
          )}
        </div>
      </div>
      <Dropdown
        menus={[
          <div 
            onClick={() => handleChangeComplete(item.id)}
            className="flex items-center gap-2 hover:cursor-pointer font-semibold block px-4 py-2 text-sm text-[#4e6af5]"
          >
            {item?.completed ? (
              <>
                <RxCross2 />
                Not Completed
              </>
            ) : (
              <>
                <FaCheck />
                Completed
              </>
            )}
          </div>,
          <div 
            onClick={() => setIsEdit(curr => !curr)}
            className="flex items-center text-[#f5f114] gap-2 hover:cursor-pointer block px-4 py-2 text-sm"
          >
            {isEdit ? (
              <>
                <MdOutlineEditOff />
                Unedit
              </> 
            ) : (
              <>
                <MdEdit />
                Edit
              </>
            )}
          </div>,
          <div 
            onClick={() => handleDeleteTodo(item.id)}
            className="flex items-center text-[#f01326] gap-2 hover:cursor-pointer block px-4 py-2 text-sm"
          >
            <MdDelete />
            Delete
          </div>
        ]}
      />
    </div>
  );
};

export default TodoItem;