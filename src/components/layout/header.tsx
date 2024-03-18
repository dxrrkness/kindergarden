import { Layout, Space } from "antd";
import CurrentUser from "./current-user";

const Header = () => {
  const headerSTyles: React.CSSProperties = {
    background: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  return (
    <Layout.Header style={headerSTyles}>
      <Space align="center" size="middle" />
      <CurrentUser />
    </Layout.Header>
  );
};

export default Header;