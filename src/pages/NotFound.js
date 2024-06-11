import NotFoundImg from "../assets/images/404-page-not-found.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={NotFoundImg} alt="Not Found" />
    </div>
  );
};

export default NotFound;
