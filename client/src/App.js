// eslint:disable-next-line:max-line-length
// eslint-disable-next-line
export default {
    name: 'app',
    data() {
      return {
        todos: [],
        tasks: [],
        tasksFiltered: [],
        newTodo: '',
        newTask: '',
        selectedTask: '',
        showModal: false,
        showTasks: false,
        duedate: '',
        priority: '',
        description: ''
      };
    },
    watch: {
      todos: {
        handler() {
          localStorage.todos = JSON.stringify(this.todos);
        },
        deep: true,
      },
      tasks: {
        handler() {
          localStorage.tasks = JSON.stringify(this.tasks);
        },
        deep: true,
      }
    },
    mounted() {
      if (localStorage.todos) {
        this.todos = JSON.parse(localStorage.todos);
      }
      if (localStorage.tasks) {
        this.tasks = JSON.parse(localStorage.tasks);
      }
    },
    methods: {
      submitTodo() {
        this.todos.push({
          title: this.newTodo,
          done: false,
        });
        this.newTodo = '';
      },
      deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        const title = todo.title;
        if(this.tasks){
            this.tasks = this.tasks.filter(i => i.title !== todo.title);
        }
        this.todos.splice(todoIndex, 1);
      },
      deleteTask(task) {
        const taskIndex = this.tasks.indexOf(task);
        const title = task.title;
        this.tasks.splice(taskIndex, 1);
      },
      showTasksForTodo(todo) {
        this.selectedTask = todo;
        this.showTasks = true;
        this.tasksFiltered =  this.tasks.filter(i => i.title == todo);
      },
      submitTask() {
        this.tasks.push({
            title: this.selectedTask,
            taskTitle: this.description,
            taskDueDate: this.duedate,
            taskPriority: this.priority,
            done: false,
          });
        this.tasksFiltered =  this.tasks.filter(i => i.title == todo);
        this.description = '';
        this.duedate = '';
        this.priority = '';
      },
      showTasksFormEdit(todo) {
        this.selectedTask = todo;
        this.showTasks = true;
        this.tasksFiltered =  this.tasks.filter(i => i.title == todo);
      }
    },
  };
