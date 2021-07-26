const app = Vue.createApp({
 data(){
     return{
       books:[
         {
            title:"you don't know js",
            author:"aung aung",
            age:20,
            img:"imgs/1.jpeg",
            isFav:true
           
         },
         {
            title:"Php",
            author:"moe moe",
            age:21,
            img:"imgs/2.png",
            isFav:false
           
         },
         {
            title:"laravel",
            author:"kyaw kyaw",
            age:22,
            img:"imgs/3.png",
            isFav:true
           
         }
       ],
       
         showBook:true,
         
       
     }
     
 },
 methods: {
    //  mouseOverHandler(){
    //      console.log('Mouse Over is working')
    //  },
    //  mouseLeaveHandler(){
    //     console.log('Mouse Leave is working')
    // },
    // mousedbHandler(){
    //     console.log('Mouse Double Click')
    // }
    clickHandler(book){
      book.isFav=!book.isFav;
    },
    clickfavourite(){
       favouritelist=!favouritelist;
    }
 },
 computed:{
     favouritelist(){
       return this.books.filter(
           book=>{
               return book.isFav;
           }
       )
     }
 }
});
app.mount("#app");