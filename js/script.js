const {createApp} = Vue;

createApp({
  data(){
    return{
       tasks:[
        'Fare la spesa',
        'Studiare Vue',
        'Giocare a D2r',
       ]
       newTask : '',
       isError : false,
    }
  },
  methods:{
    addTask(){

      if(newTask.length < 3){
        this.isError = true;
      }else{
       // unshift pusha e mette in cima il nuovo elemento
       this.tasks.unshift(this.newTask)
       // resetto il campo dell'input
       this.newTask = '';
      }
     
    }
 
  },
  mounted(){

  },

}).mount('#app');