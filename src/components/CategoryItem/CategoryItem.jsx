import "./CategoryItem.scss";

const CategoryItem = ({ title, imgUrl }) => {
  console.log(imgUrl);
  return (
    <div className="category-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className="body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
