import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryDir.scss";

const CategoryDir = ({ list }) => {
  return (
    <div className="category-list">
      {list.map((item) => {
        const { id, title, imgUrl } = item;
        return <CategoryItem key={id} title={title} imgUrl={imgUrl} />;
      })}
    </div>
  );
};

export default CategoryDir;
