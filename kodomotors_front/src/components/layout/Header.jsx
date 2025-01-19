import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Button,
  Avatar,
  Typography,
  Drawer,
} from "antd";
import { NavLink } from "react-router-dom";

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

function Header({
  placement,
  name,
  subName,
  onPress,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar,
}) {
  const {  Text } = Typography;
  const [visible, setVisible] = useState(false);

  useEffect(() => window.scrollTo(0, 0));

  const hideDrawer = () => setVisible(false);

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {subName.replace("/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <div style={{ 
            marginLeft: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            height: '100%'
          }}>
            <Avatar
              style={{ 
                backgroundColor: '#E6E6FA',
                color: '#000',
                fontWeight: '500'
              }}
            >
              MN
            </Avatar>
            <div style={{ textAlign: 'left' }}>
              <Text strong style={{ display: 'block', fontSize: '14px', lineHeight: '1.2' }}>
                Miguel Núñez
              </Text>
              <Text type="secondary" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                Gerente Comercial
              </Text>
            </div>
          </div>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            visible={visible}
          >
          </Drawer>
        </Col>
      </Row>
    </>
  );
}

export default Header;
