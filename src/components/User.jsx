import PropTypes from "prop-types";

export const User = ({ user }) => {
  const { name, email, bio, skills, isOpenToWork } = user;
  const skillsStr = skills.join(", ");
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>BIO: {bio}</p>
      <p>Skills: {skillsStr}</p>

      <p>{isOpenToWork ? "Open to Work" : "Not open to Work"}</p>
    </>
  );
};

User.propTypes = {
  //   data: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     bio: PropTypes.string.isRequired,
  //     skils: PropTypes.arrayOf(PropTypes.string).isRequired,
  //     isOpenToWork: PropTypes.bool.isRequired,
  //   }),

  data: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOpenToWork: PropTypes.bool.isRequired,
  }),
};
