export type TTodoItemProps = {
  item: any;
  handleChangeCheckbox: (id: number) => void;
  handleChangeComplete: (id: number) => void;
  handleEditTodo: (value: string, id: number) => void;
  handleDeleteTodo: (id: number) => void;
}