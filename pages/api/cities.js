import cities from "../../data/cities.json";

export default function handler(req, res) {
  res.json(cities);
}
