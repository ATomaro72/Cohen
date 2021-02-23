<template>
  <div class="app">
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
            <textarea v-model="newTask" id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">Add a task?</label>
          </div>
          <button class="btn waves-effect col s12" v-b-modal.modal-task>Add</button>
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
                <span>{{task.taskTitle}}</span>
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
    </div>
     <b-modal
            id="modal-task"
            ref="modal"
            title="Submit Task"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
            :hide-header="true" :hide-header-close="true" :no-close-on-backdrop="true">
          <form ref="form" @submit.stop.prevent="submitTaskModal">
          <b-form-group
              label="Description"
              label-for="description-input"
              invalid-feedback="Description is required"
              :state="descriptionState"
          >
          <b-form-input id="duedate-input" v-model="Description" :state="descriptionState" required></b-form-input>
          </b-form-group>
          <b-form-group
              label="Due Date"
              label-for="duedate-input"
              invalid-feedback="Due Date is required"
              :state="dueDateState"
          >
          <b-form-input id="duedate-input" v-model="DueDate" :state="dueDateState" required></b-form-input>
          </b-form-group>
          <b-form-group
              label="Priority"
              label-for="priority-input"
              invalid-feedback="Priority is required"
              :state="priorityState"
          >
          <b-form-input id="priority-input" v-model="Priority" :state="priorityState" required></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
  </div>
</template>
<script lang="ts" src="./App.js"></script>
<style lang="scss">
.header{
  margin-top: 100px;
}
</style>
