import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:59897/squash/freeCourts/";

export function getFreeCourts(startDate, startTime, endTime) {
  const request = baseUrl + startTime + "/" + endTime + "/60";
  return fetch(request)
    .then(handleResponse)
    .catch(handleError);
}
