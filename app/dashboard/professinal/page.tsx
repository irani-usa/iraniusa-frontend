
import React from "react";

import { Tabs } from "@/components/Dashboard/Professional";
import { General } from "@/components/Dashboard/Professional/TabsContent";

const page = () => {
  return (
    <section className="no-scroll w-full border border-white-shade-4 rounded-xl bg-white h-full text-blue overflow-y-scroll">
      <Tabs />
      <General />
    </section>
  );
};

export default page;
