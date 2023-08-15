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
    url: API_BASE_URL + "/pv/user/me",
    method: "GET",
  });
}

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/pv/login",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function volunteerRegister(volunteerRegisterRequest) {
  return request({
    url: API_BASE_URL + "/online/register/volunteer",
    method: "POST",
    body: JSON.stringify(volunteerRegisterRequest),
  });
}
