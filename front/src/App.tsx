import BaseLayout from "./layouts/BaseLayout";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
      <BaseLayout>
        <Dashboard />
      </BaseLayout>
    </>
  );
}

export default App;
