     new Vue({
  el: '#app',
  data() {
    return {
        keyword: '',
        article: [],
        loading: false,
        errored: false
        
    }
    },
methods: {
    
    getResults() {
      if (this.keyword === '' || this.keyword === null || this.keyword.value === 0){
        this.message='Please enter text in text box below';
        this.loading = false
        Abort();
    } else {
      this.loading = true
      return  axios.get("http://localhost:3000/listo/"+`${this.keyword}`).then(response => 
      {this.article = response.data
    })
    .catch(error => {
        console.log(error)
        this.errored = true
      })

    

    }

    }
      
    
}
     })