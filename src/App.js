import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import PropTypes from "prop-types";

function App() {
  const styleObject={
    color: "grey",
    textAlign :"center",
    fontSize :"100%",
    fontFamily :"Arial",
  };
  const handleName = (name) => {
    alert(`Hi, I'm Beya Nasr`);
  };
  return (
    <div  style={styleObject}>
        <ProfileComponent  FullName="Beya Nasr"
        bio="I am a web development student at GoMyCode "
        profession="Student"
        className="intro"
        image="https://susanaclavero.files.wordpress.com/2015/09/myavatar.jpg"
        handleName={handleName}
        />
    </div>
  );
};
ProfileComponent.defaultProps = {
  FullName: "uncknown",
  image:"https://cdn1.vectorstock.com/i/thumb-large/45/70/female-avatar-profile-picture-silhouette-light-vector-4684570.jpg",
};
ProfileComponent.PropTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.string,
};

export default App;
