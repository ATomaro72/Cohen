<template>
  <div>
    <div class="container">
      <div class="row header">
        <h1 v-if="!showTasks" class="col s6 offset-s3 center-align teal-text">To-Do List!</h1>
        <h1 v-else class="col s6 offset-s3 center-align teal-text">Tasks List!</h1>      
      </div>
      <div v-if="!showTasks" class="row">
        <form @submit.prevent="submitTodo" class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix">list</i>
            <textarea v-model="newTodo" id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">What to do?</label>
          </div>
          <button class="btn waves-effect col s12">Add</button>
        </form>
      </div>
      <div v-else class="row">
        <form @submit.prevent="submitTask" class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix">list</i>
            <textarea v-model="description" id="description" class="materialize-textarea" required></textarea>
            <label for="description">Add a task?</label>
          </div>
          <div class="input-field">
            <textarea v-model="duedate" id="duedate" class="materialize-textarea" required></textarea>
            <label for="duedate">Due Date</label>
         </div>
         <div class="input-field">
           <textarea v-model="priority" id="priority" class="materialize-textarea" required></textarea>
           <label for="priority">Priority</label>
          </div>
          <button class="btn waves-effect col s12">Add</button>
        </form>
      </div>
      <div>
      </div>
      <div v-if="!showTasks" class="row">
        <ul class="collection col s6 offset-s3">
          <li class="collection-item" v-for="todo in todos" :key="todo.id">
            <p>
              <label>
                <b-button size="sm" class="mb-2" @click="showTasksForTodo(todo.title)">
                  <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                </b-button> 
                <span>{{todo.title}}</span>
                <span>
                  <a @click.prevent="deleteTodo(todo)">
                    <i class="material-icons right teal-text">delete</i>
                  </a>
                </span>
              </label>
            </p>
          </li>
        </ul>
      </div>
      <div v-else class="row">
        <ul class="collection col s6 offset-s3">
          <li class="collection-item" v-for="task in tasksFiltered" :key="task.id">
            <p>
              <label>
                <b-button size="sm" class="mb-2" @click="showTaskFormEdit(task.title)">
                  <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                </b-button> 
                <span>{{task.description}} + {{task.priority}} + {{task.duedate}}</span>
                <span>
                  <a @click.prevent="deleteTask(task)">
                    <i class="material-icons right teal-text">delete</i>
                  </a>
                </span>
              </label>
            </p>
          </li>
        </ul>    
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./App.js"></script>
<style lang="scss">
.header{
  margin-top: 100px;
}
</style>
