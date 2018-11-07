new Vue({
    el:'#vue-app',
    data:{
        name:'Digit',
        job:'Digger',
        website: 'http://www.google.com',
        websiteTag:'<a href="http://www.google.com">The Google</a>'
    },
    methods:{
        greet:function(time){
        return 'Good' + time + " " +this.name;
    }
   }
});