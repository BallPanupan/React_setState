constructor(props) {
  super(props);
  this.state = {
    courses: []
  }

  var self = this;
  axios.get('http://jsonplaceholder.typicode.com/users')
  .then(response => response.data)
  .then((data) => {
    this.setState({ courses: data})
    console.log("state_courses :",this.state.courses)
  })

}



  //thank:https://www.techiediaries.com/react-axios/
