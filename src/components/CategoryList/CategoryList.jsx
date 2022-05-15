import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryList.scss";

const CategoryList = ({ list }) => {
  return (
    <div className="category-list">
      {list.map((item) => {
        const { id, title, imgUrl } = item;
        return <CategoryItem key={id} title={title} imgUrl={imgUrl} />;
      })}
    </div>
  );
};

export default CategoryList;
