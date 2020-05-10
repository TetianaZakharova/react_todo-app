import React from 'react';
import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';
import { TodosFilters } from './components/TodosFilter';

const filterType = {
  all: 'All',
  completed: 'Completed',
  active: 'Active',
};

class App extends React.Component {
  state = {
    todos: [],
    selectAll: false,
    currentFilter: filterType.all,
  }

  addNewTodo = (todo) => {
    this.setState(state => ({
      todos: [...state.todos, todo],
    }));
  };

  toggleComplete = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  }

  removeTodo = (id) => {
    this.setState(prevState => ({
      todos: [...prevState.todos].filter(todo => id !== todo.id),
    }));
  }

  AllDone = () => {
    const completedTodos = this.state.todos
      .every(todo => todo.completed === true);

    this.state.todos.length === completedTodos.length
      ? this.setState(() => ({ selectAll: true }))
      : this.setState(() => ({ selectAll: false }));
  }

  toggleSelectAll = () => {
    const { selectAll } = this.state;

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => ({
        ...todo,
        completed: !selectAll,
      })),
      selectAll: !selectAll,
    }), () => this.AllDone());
  }

  activeTodoCounter = () => this.state.todos
    .filter(task => !task.completed).length

  filterSelector = (currentFilter) => {
    this.setState({ currentFilter });
  }

  filterByStatus = () => {
    if (this.state.currentFilter === filterType.active) {
      return this.state.todos.filter(todo => !todo.completed);
    }

    if (this.state.currentFilter === filterType.completed) {
      return this.state.todos.filter(todo => todo.completed);
    }

    return this.state.todos;
  }

  removeCompleted = () => {
    this.setState(prevState => ({
      todos: [...prevState.todos].filter(todo => !todo.completed),
    }));
  }

  render() {
    const filteredTodos = this.filterByStatus();

    return (
      <section className="todoapp">
        <TodoApp
          addNewTodo={this.addNewTodo}
          todos={this.state.todos}
        />
        <TodoList
          todos={filteredTodos}
          selectAll={this.state.selectAll}
          toggleComplete={this.toggleComplete}
          removeTodo={this.removeTodo}
          toggleSelectAll={this.toggleSelectAll}
        />
        {this.state.todos.length > 0 && (
          <TodosFilters
            filterType={filterType}
            todos={this.state.todos}
            currentFilter={this.state.currentFilter}
            activeTodoCounter={this.activeTodoCounter}
            filterSelector={this.filterSelector}
            removeCompleted={this.removeCompleted}
          />
        )}
      </section>
    );
  }
}

export default App;
