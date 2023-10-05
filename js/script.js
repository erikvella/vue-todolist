const {createApp} = Vue;

createApp({
  data(){
    return{
       tasks:[
        {
          text: 'Fare la spesa',
          done: false
  
         },
         {
          text: 'Studiare Vue',
          done: false
         },
         {
          text: 'Giocare a D2r',
          done: true
         },
        
       ],
       
        
       
       newTask : '',
       errorMsg: '',
    
    }
  },
  methods:{
    addTask(){

      if(this.newTask.length < 5){

      }else{
        console.log(this.newTask);
        this.tasks.unshift(this.newTask);
        this.newTask ='';
  
         
      }
   
    },

    removeTask(index){
      if(this.tasks[index].done){

        this.tasks.splice(index,1)
      }else{
        this.writeErrors('Errore! Non hai ancora svolto questo task!') ; 
      }
    },

    writeErrors(errorStr){
       this.errorMsg = errorStr;
       setTimeout(()=>{
          this.errorMsg = '';
       },2000)

    }
 
  },
  mounted(){

  },

}).mount('#app');