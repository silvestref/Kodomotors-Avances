import { Layout, Row, Col } from "antd";
// import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2025, desarrollado
            {/* {<HeartFilled />} por el */}
            por el
            <a href="#" className="font-weight-bold" target="_blank">
              Equipo de Desarrollo de Novaly
            </a>
          </div>
        </Col>
        {/* <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul>
              <li className="nav-item">
                <a
                  href="https://novaly.com"
                  className="nav-link text-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novaly
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/blog"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/license"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </Col> */}
      </Row>
    </AntFooter>
  );
}

export default Footer;
