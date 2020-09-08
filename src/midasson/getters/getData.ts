import { getBooks } from "./getBooks"
import { getSchools } from "./getSchools";

export const getData = () => {
    getBooks();
    getSchools();
}