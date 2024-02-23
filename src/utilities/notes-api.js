import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getNotes() {
  return sendRequest(BASE_URL);
}

export async function addNote(note) {
    return sendRequest(BASE_URL, 'POST', note);
  }