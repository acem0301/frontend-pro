import http from "../http-common";

class LoginService {
  fetchCharacters = async () => {
    return http.post("/login", {
      username: "crolon",
      password: "12345",
    });
  };
}

export default new LoginService();
