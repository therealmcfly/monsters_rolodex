import CategoryDir from "./components/CategoryDir/CategoryDir";

const shopCategoryList = [
  {
    id: 1,
    title: "Wetsuits",
    imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Surfboards",
    imgUrl: "https://i.ibb.co/px2tCc3/men.png",
  },
  {
    id: 3,
    title: "Accessories",
    imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Swimwear",
    imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Apparels",
    imgUrl: "https://i.ibb.co/R70vBrQ/jackets.png",
  },
];
const App = () => {
  return (
    <>
      <CategoryDir className="catagory-list" list={shopCategoryList} />;
    </>
  );
};

export default App;
