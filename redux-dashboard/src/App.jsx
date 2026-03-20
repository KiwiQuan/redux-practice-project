import { Users } from "@/features/users/Users";
import { DashboardLayout } from "@/layout/DashboardLayout";
function App() {
  return (
    <>
      <DashboardLayout>
        <Users />
      </DashboardLayout>
    </>
  );
}

export default App;
