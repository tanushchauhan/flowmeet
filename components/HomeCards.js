"use client";

import Card from "@/components/Card";

function HomeCards() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <Card
        img="/icons/add-meeting.svg"
        head="New Meeting"
        des="Start an instant meeting"
        clickFunc={() => {}}
      />
    </section>
  );
}

export default HomeCards;
