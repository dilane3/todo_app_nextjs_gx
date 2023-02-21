import Todo from "@/entities/todo";
import { createSignal } from "@dilane3/gx";

const todoSignal = createSignal<Todo[]>({
  name: "todo",
  state: [],
  actions: {
    add: (state, payload: Todo) => {
      state.push(payload);

      return state;
    },

    remove: (state, payload: number) => {
      const index = state.findIndex((todo) => todo.id === payload);

      if (index !== -1) {
        state.splice(index, 1);
      }

      return state;
    },

    toggle: (state, payload: number) => {
      const index = state.findIndex((todo) => todo.id === payload);

      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }

      return state;
    },
  }
})

export default todoSignal;