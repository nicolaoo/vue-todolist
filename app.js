const { createApp } = Vue 


createApp({
    data(){
        return{
            tasks:[
                {
                    text: 'una stringa che indica il testo del todo',
                    done: 'un booleano (true/false) che indica se il todo è stato fatto oppure no'
                },
                {
                    text: 'una stringa che indica il testo del todo',
                    done: 'un booleano (true/false) che indica se il todo è stato fatto oppure no'
                },
                {
                    text: 'una stringa che indica il testo del todo',
                    done: 'un booleano (true/false) che indica se il todo è stato fatto oppure no'
                },
            ],

            taskUser: ''
        }
    },

    methods:{
        addTask() {
            console.log(this.tasks, this.taskUser)

            this.tasks.push(this.taskUser)
            this.taskskUser = ''
        },

        removeTasks() {

        },
    },
}).mount('#app')