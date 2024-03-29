import react from "react";
import SchoolProfile from "./SchoolProfile";
import StudentProfile from "./StudentProfile";

export default function Profile() {
  return (
    <div className="profile">
      <SchoolProfile />
      <StudentProfile />
    </div>
  );
}
