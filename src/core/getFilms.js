import { getFilms } from "../services/services"
import { renderFilmList } from "./render"

export const getAllFilms = async () => {

  renderFilmList(await getFilms())
}