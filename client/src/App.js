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
        priorityState: null,
        descriptionState: null,
        dueDateState: null,
        DueDate: '',
        Priority: '',
        Description: ''
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
      },
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
      showTasksForTodo(todo) {
        this.selectedTask = todo;
        this.showTasks = true;
        this.tasksFiltered =  this.tasks.filter(i => i.title == todo);
      },
      submitTask () {
        this.$bvmodal.show('modal-task');
      },
      submitTaskModal() {
        this.tasks.push({
            title: this.selectedTask,
            taskTitle: this.newTask,
            done: false,
          });
        this.newTask = '';
      },
      showTasksFormEdit(todo) {
        this.selectedTask = todo;
        this.showTasks = true;
        this.tasksFiltered =  this.tasks.filter(i => i.title == todo);
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity();
        this.descriptionState = valid;
        this.dueDateState = valid;
        this.priorityState = valid;
        return valid
      },
      resetModal() {
       this.descriptionState = null;
       this.dueDateState = null;
       this.priorityState = null;
       this.Priority = '';
       this.DueDate = '';
       this.Description = '';
        // this.name = ''
        // this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault();
        // Trigger submit handler
        this.submitTaskModal();
      },
    },
  };
