import places from "../../../data/places.json";
import cities from "../../../data/cities.json";

export default function handler(req, res) {
  let { city: _city } = req.query;
  const data = places.filter((place) => place.city.toLowerCase() === _city);
  const city = cities.find((_cityx) => _cityx.title.toLowerCase() === _city);
  res.json({ places: data, city });
}
