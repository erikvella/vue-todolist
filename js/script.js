const {createApp} = Vue;

createApp({
  data(){
    return{
       tasks:[
        'Fare la spesa',
        'Studiare Vue',
        'Giocare a D2r',
       ],
       newTask : '',
       isError : false,
       done : false
    }
  },
  methods:{
    addTask(){

      if(this.newTask.length < 5){
        this.isError = true;
      }else{
        console.log(this.newTask);
        this.tasks.unshift(this.newTask);
        this.newTask ='';
        this.isError = false;
         
      }
   
    },

    removeTask(index){
          this.tasks.splice(index , 1)
    },

    markTask(){
      if(this.newTask){

      }
    }
 
  },
  mounted(){

  },

}).mount('#app');