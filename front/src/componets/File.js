import React, { Component } from "react";

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      user: []
    };

    // this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = (evt) => {
      this.setState({ image: evt.target.result });
      const img = this.state.image
      this.upload(img)
    }
    reader.readAsDataURL(file);
  }
  upload = (img) => {
    console.log(img)
    const url = 'http://localhost:7080/image/imageupload'
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin" : "*"


      },
      body: JSON.stringify(img)
    })
  }
  getImages = () => {
    const url = "http://localhost:7080/fimage/getimages";
    fetch(url)
      .then((response) => response.json())
      .then((getImages) => {
        this.setState({
          users: getImages
        });
      })
      .catch((error) => {
        if (typeof error.json === "function") {
          error
            .json()
            .then((jsonError) => {
              console.log("Json error from API");
              console.log(jsonError);
            })
            .catch((genericError) => {
              console.log("Generic error from API");
              console.log(error.statusText);
            });
        } else {
          console.log("Fetch error");
          console.log(error);
        }
      });
  }

  renderimages() {
const{user}=this.state

    return user.map((getImages) => (
      <div>
        <img
          width="200px"
          src={getImages}
        />
      </div>
    ));
  }    

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />

          </div>
    <div>{this.renderimages()}</div>
        </div>
      </div>
    );
  }
}
export default File;