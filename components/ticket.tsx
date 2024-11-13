const tickets = [
    {
      title: "Race Day Flex Ticket",
      price: "$250",
      date: "Aug 30 - Sep 02, 2024",
      description:
        "Experience the thrill of race day with flexible access to Lime Rock Park's events.",
    },
    {
      title: "Drift Zone Event",
      price: "$50",
      date: "Sep 27 - Sep 29, 2024",
      description:
        "Dive into the heart-pounding world of precision driving with the Drift Zone Event.",
    },
    {
      title: "Road to The Championship",
      price: "$240",
      date: "Oct 12 - Oct 15, 2024",
      description:
        "Witness the best drivers compete for championship glory in an epic battle.",
    },
  ];
  
  export default function Tickets() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold">{ticket.title}</h2>
              <p className="text-gray-500">{ticket.date}</p>
              <p className="my-2">{ticket.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">{ticket.price}</span>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  