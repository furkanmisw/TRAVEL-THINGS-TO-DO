import places from "../../../data/places.json";

export default function handler(req, res) {
  let { city, placeid } = req.query;
  city = city.replaceAll("-", " ");
  placeid = placeid.replaceAll("-", " ");
  const data = places.find(
    (p) => p.title.toLowerCase() === placeid && p.city.toLowerCase() === city
  );
  res.json(data);
}
