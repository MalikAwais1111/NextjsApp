import Carosal from "./homepage/@carosal/page";
import Topproducts from "./homepage/@topproducts/page";
import Offers from "./homepage/@offers/page";
import { Children } from "react";
export default function Home() {
  return (
    <main>
      <div>
        <Carosal />
        <Offers />
        <Topproducts />
      </div>
    </main>
  );
}
