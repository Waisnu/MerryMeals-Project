export const API_BASE_URL = "http://localhost:8080";
export const ACCESS_TOKEN = "accessToken";

const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/online/user/me",
    method: "GET",
  });
}

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/online/login",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function memberRegister(memberRegisterRequest) {
  return request({
    url: API_BASE_URL + "/online/register/member",
    method: "POST",
    body: JSON.stringify(memberRegisterRequest),
  });
}

export function createMeal(newMeal){
  return newMeal({
      url: API_BASE_URL + "meal/savemeal",
      method: "POST",
      body: JSON.stringify(newMeal),
    });
}
