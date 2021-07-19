const app = new Vue({
    el: '#app',
    data: {
        title: 'GYM',
        tasks: [],
        task: '',
        rol: 'alert-danger'
    },
    methods : {

        addTask() {

            if (this.task) {

                const name = this.task;
                const state = false;
                const newTask = {
                    name,
                    state
                };
                
                this.tasks = [...this.tasks, newTask];

                //Save on LocalStorage
                this.saveOnLocalStorage();
            }
            this.task = "";
        },
        editTask(index) {

            this.tasks[index].state = true;
            this.saveOnLocalStorage();

        },
        deleteTask(index) {

            this.tasks.splice(index, 1);
            this.saveOnLocalStorage();
            
        },
        saveOnLocalStorage() {

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    created() {
        
        let datosLS = JSON.parse(localStorage.getItem('tasks')) || [];
        this.tasks = datosLS; 
    }
})