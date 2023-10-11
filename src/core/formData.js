export const formData = (form) => {
  const formData = new FormData(form)
  const json = {
    title: formData.get('title'),
    description: formData.get('description'),
    year: +formData.get('year'),
    rating: +formData.get('rating'),
    image: formData.get('image'),
    genres: [formData.get('genres')],
    countrys: [formData.get('countrys')],
  }

  return json
}
