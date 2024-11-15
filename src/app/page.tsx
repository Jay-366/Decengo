import Header from "../../components/header";
import Hero from "../../components/hero";
import Tickets from "../../components/ticket";
import VenueHighlight from "../../components/venuehighlight";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Tickets />
      {/* <VenueHighlight /> */}
    </div>
  );
}
