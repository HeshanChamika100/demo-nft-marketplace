import React from "react";
import CardList from "./CardList";
import nfts from "../../../public/data/nfts";
import Card from "./Card";

const Products = () => {
  return (
    <section className="p-4 pb-24 text-white">
      <div className="container max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl md:text-3xl font-medium">
            Explore Hot Products
          </h1>
          <p className="text-slate-400 md:w-1/2 mx-auto">
            We are a huge marketplace dedicated to connecting great artists of
            all Techwinds with their fans and unique tiken collectors!
          </p>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 items-center justify-center">
         {
            nfts.map((item, index) => (
               <Card key={index} item={item} />
            ))
         }
        </div>
      </div>
    </section>
  );
};

export default Products;
