import { getFilms } from "../services/services"
import { renderFilmList } from "./render"
import { showLoader, hideLoader } from "../utils/functions"
export const getAllFilms = async () => {

  renderFilmList(await getFilms())
}