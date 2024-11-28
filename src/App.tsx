import { useEffect, useState } from 'react'
import './App.css'
import { Layout } from '@/components/templates';
import { Button, Input } from '@/components/atoms';
import { TodoItem } from './components/organisms';
import { getTodoList } from './services';
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

function App() {
  const [todoList, setTodoList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [todoAdd, setTodoAdd] = useState<string>('');

  const fetchTodoData = async () => {
    try {
      setIsLoading(true);
      const data = await getTodoList({ limit: 10 });

      let temp = data?.todos?.reverse().map((todo: any) => ({
        ...todo,
        checked: false,
      }));

      setTodoList(temp);
      setIsLoading(false);
    } catch(err) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTodoData();
  }, []);

  useEffect(() => {
    if(keyword.length === 0) {
      fetchTodoData();
    }
  }, [keyword.length]);

  const handleChangeSearch = (e: any) => {
    setKeyword(e?.target.value);

    let temp = todoList.filter(item => {
      if(
        item.todo.toLowerCase().includes(
          e.target.value.toLowerCase()
        )
      ) {
        return item;
      };
    });
    
    setTodoList(temp);
  };

  const handleChangeCheckbox = (id: number) => {
    let temp = todoList.map((todo: any) => {
      if(todo.id === id) {
        return ({
          ...todo,
          checked: !todo.checked,
        });
      } else {
        return todo;
      }
    });

    setTodoList(temp);
  };

  const handleAddTodo = () => {
    const id = todoList[todoList.length - 1].id + 1;

    const data = {
      checked: false,
      completed: false,
      id: id,
      todo: todoAdd,
    };

    setTodoList((curr) => [data, ...curr]);
    setTodoAdd('');
  }

  const handleChangeComplete = (id: number) => {
    let temp = todoList.map((todo: any) => {
      if(todo.id === id) {
        return ({
          ...todo,
          completed: !todo.completed,
        });
      } else {
        return todo;
      }
    });

    setTodoList(temp);
  };

  const handleEditTodo = (value: string, id: number) => {
    let temp = todoList.map((todo: any) => {
      if(todo.id === id) {
        return ({
          ...todo,
          todo: value,
        });
      } else {
        return todo;
      }
    });

    setTodoList(temp);
  };

  const handleDeleteTodo = (id: number) => {
    let temp = todoList.filter((todo: any) => todo.id !== id);

    setTodoList(temp);
  };

  const handleRemoveByCheckbox = () => {
    let temp = todoList.filter((todo: any) => todo?.checked !== true);

    setTodoList(temp);
  };

  const handleCompleteByCheckbox = () => {
    let temp = todoList.map((todo: any) => {
      if(todo?.checked) {
        return ({
          ...todo,
          completed: true,
          checked: false,
        })
      } else return todo;
    });

    setTodoList(temp);
  };

  const handleRemoveAll = () => {
    setTodoList([]);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-2 w-1/2 justify-center items-center py-4">
        <div className="flex gap-2 bg-white p-3 w-full rounded justify-center shadow-lg">
          <Input
            value={keyword}
            onChange={handleChangeSearch}
            placeholder="Search todo"
            className="w-full"
            startIcon={<IoSearch />}
          />
        </div>
        <div className="flex gap-2 bg-white p-3 w-full rounded justify-center shadow-lg">
          <Input
            value={todoAdd}
            onChange={(e) => setTodoAdd(e.target.value)}
          />
          <Button
            onClick={handleAddTodo}
            startIcon={<IoMdAdd />}
            className="bg-gradient-to-br from-[#7893f5] to-[#3d64f2]"
          >
            Add
          </Button>
        </div>
        <div
          className="flex gap-2 items-start p-3 bg-white shadow-lg rounded w-full"
        >
          <Button
            onClick={handleRemoveByCheckbox}
            className="bg-gradient-to-br from-[#f01326] to-[#9e0916]"
          >
            Delete
          </Button>
          <Button
            onClick={handleRemoveAll}
            className="bg-gradient-to-br from-[#f01326] to-[#9e0916]"
          >
            Remove All
          </Button>
          <Button
            onClick={handleCompleteByCheckbox}
            className="bg-gradient-to-br from-[#7893f5] to-[#3d64f2]"
          >
            Completed
          </Button>
        </div>
        <div className="flex flex-col gap-2 w-full bg-white rounded justify-center shadow-lg">
          {isLoading ? (
            <div className="p-4 text-center w-full">
              <span className="font-semibold text-[#3d3b3b]">
                Fetching data
              </span>
            </div>
          ) : (
              todoList.map((item, key) => (
                <TodoItem 
                  key={'todo-item-' + key}
                  item={item}
                  handleChangeCheckbox={handleChangeCheckbox}
                  handleChangeComplete={handleChangeComplete}
                  handleEditTodo={handleEditTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default App
