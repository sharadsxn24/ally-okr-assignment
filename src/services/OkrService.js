import API from "../utils/api";

export const fetchOkrs = async () => API.get('sample-okrs/db.json');
