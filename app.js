const { createApp } = Vue 


createApp({
    data(){
        return{
            tasks:[
                {
                    text: 'portare fuori il cane',
                    done: false,
                },
                {
                    text: 'andare a calcio',
                    done: false
                },
                {
                    text: 'portare i bambini a scuola',
                    done: true
                },
            ],

            taskUser: '',
        }
    },

    methods:{
        addTask() {
            let text = this.taskUser.trim()
            if(text === '') {
                this.taskUser = ''
                return
            }

            const newTask = {
                text: this.taskUser,
                done: false,
            }

            this.tasks.push(newTask)
            this.taskUser = ''
        },

        removeTasks(remove) {
            this.tasks.splice(remove, 1)
        },

    },
}).mount('#app')