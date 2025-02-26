import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import {Form, Input, Layout, Typography, Space} from "antd";
import CreateClass from "./pages/CreateClass";
import Home from "./pages/home";
const {Header, Content } = Layout;
const {Title} = Typography;
const {Item} = Form;

function appRoutes() {
  const routes =[
    {path: "/", element: <Home />}
    {path: "/Creat-Class", element: <CreateClass />}
  ]
}

return useRoutes(Routes);


function App() {
  return (
    <>
    <Router>
      <Header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Title level={1} style={{color: "#fff"}}>PrismaGestão</Title>
        <Space>
          <link style={{marginRight: 16}} to="/">Turmas disponíveis</link>
          <link to="">Criar turma</link>
        </Space>
      </Header>
      <AppRoutes/>
    </Router>
      
    </>
  );
}

export default App;
