const { createApp } = Vue 


createApp({
    data(){
        return{
            tasks:[
                {
                    text: 'una stringa che indica il testo del todo',
                    done: '',
                },
                {
                    text: 'una stringa che indica il testo del todo',
                    done: ''
                },
                {
                    text: 'una stringa che indica il testo del todo',
                    done: ''
                },
            ],

            taskUser: '',
        }
    },

    methods:{
        addTask(text) {
            console.log((this.tasks).text)

            this.tasks.push(this.taskUser)
            this.taskskUser = ''
        },

        removeTasks(remove) {
            this.tasks.splice(remove, 1)
        },

    },
}).mount('#app')