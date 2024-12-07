import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      {/* functional comp */}
      <User name={"This is Meghana"} />
      {/* class comp */}
      <UserClass name={"This is Meghanashree"} location="Bengaluru" />
    </div>
  );
};
export default About;
