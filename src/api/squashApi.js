import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_SQUASH_BASE_URL + "/squash/freeCourts";
//const baseUrl = "http://localhost:5000/squash/freeCourts";
const baseUrl = "http://wodzitsu.site/api/squash/freeCourts";

export function getFreeCourts(startDate, startTime, endTime) {
  const request = baseUrl + "/" + startTime + "/" + endTime + "/60";
  return fetch(request)
    .then(handleResponse)
    .catch(handleError);
}

export function getAllCourts() {
  const request = baseUrl;
  return fetch(request)
    .then(handleResponse)
    .catch(handleError);
}
