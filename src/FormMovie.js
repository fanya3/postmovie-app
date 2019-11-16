import React from "react";
import './FormMovie.css';



class FormMovie extends React.Component {
  state = {
    title: "",
    poster: "",
    comment: ""
  };


  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  submitForm = e => {

    const url = "https://post-a-form.herokuapp.com/api/movies/";
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };

    e.preventDefault();

    fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Film ajouté avec l'ID ${res}!`);
            }
        }).catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout du film");
        });
  };

  
  

  render() {
    
    return (
      <div className="FormMovie">
        <h1>Ton film préféré!</h1>

        <form onSubmit={this.submitForm} className="full-form" >
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Nom du film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster du film</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-comment">
              <label htmlFor="comment">Ton commentaire</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                placeholder="pourquoi tu aimes ce film??"
              />
            </div>
            <hr />
            <div className="form-data">
              <input className ="button" type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
