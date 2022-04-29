import axios from "axios";
import { MapContainer } from "components/Map";

export default function Home({ toilet }) {
  return (
    <>
      <MapContainer toilet={toilet} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.post("http://localhost:4000/api/map");
  const toilet = res.data;
  return {
    props: { toilet },
  };
}
