const { createApp } = Vue 


createApp({
    data(){
        return{
            tasks:[
                {
                    text: 'una stringa che indica il testo del todo',
                    done: false,
                },
                {
                    text: 'una stringa che indica il testo del todo',
                    done: false
                },
                {
                    text: 'una stringa che indica il testo del todo',
                    done: true
                },
            ],

            taskUser: '',
        }
    },

    methods:{
        addTask() {
            if(this.taskUser === '') {
                return
            }

            const newTask = {
                text: this.taskUser,
                done: false,
            }

            this.tasks.push(newTask)
            taskskUser = ''
        },

        removeTasks(remove) {
            this.tasks.splice(remove, 1)
        },

    },
}).mount('#app')