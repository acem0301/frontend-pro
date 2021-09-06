import React from "react";
import ExampleService from "../services/example.service";

class ConsumoApi extends React.Component {
  render() {
    return <div className="">Hola</div>;
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await ExampleService.fetchCharacters();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

export default ConsumoApi;
