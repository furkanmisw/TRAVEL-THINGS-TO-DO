import places from "../../../data/places.json";

export default function handler(req, res) {
  let { city } = req.query;
  const data = places.filter((place) => place.city.toLowerCase() === city);
  res.json(data);
}
