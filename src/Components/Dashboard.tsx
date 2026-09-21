import { useAppSelector } from "../app/hooks";

const Dashboard = () => {
  const user = useAppSelector(
    (state) => state.auth.user
  );
  
  return (
    <div>
      <h1>
        Welcome, {user?.username}
      </h1>

      <p>
        Role: {user?.role}
      </p>
    </div>
  );
};

export default Dashboard;