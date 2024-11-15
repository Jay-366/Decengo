import Header from "../../../components/header";
import Tickets from "../../../components/ticket";
import VenueHighlight from "../../../components/venuehighlight";

export default function Home() {
  return (
    <div>
      <Header />
      <VenueHighlight />
      <Tickets />
    </div>
  );
}