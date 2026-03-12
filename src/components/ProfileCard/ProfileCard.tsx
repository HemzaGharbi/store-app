// my solution

interface Props {
  name: string;
  description: string;
  avatar: string;
}

export default function ProfileCard(Props: Props) {
  const { avatar, name, description } = Props;

  return (
    <div className="profile-card">
      <h2 style={{ color: "red" }}>Name : {name}</h2>
      <p style={{ color: "green" }}>Description : {description}</p>
      <img
        style={{ borderRadius: "10px", width: "300px", height: "auto" }}
        src={avatar}
        alt="User avatar"
      />
    </div>
  );
}

// rafc
// alisher solution

// import styles from "./ProfileCard.module.css";
// import type { FC } from "react";
// interface Props {
//   name: string;
//   description: string;
//   avatar: string;
// }

// export const ProfileCard: FC<Props> = ({ name, description, avatar }) => {
//   return (
//     <div className={styles.container}>
//       <h2>{name}</h2>
//       <p>{description}</p>
//       <img src={avatar} alt="User profile" />
//     </div>
//   );
// };
