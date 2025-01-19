import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/novaly/kodologo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import the SCSS de sidenav
import '../../assets/styles/layouts/sidenav.scss';

function Sidenav({ color }) {
  return (
    <div className="sidenav-container">
      <div style={{ flex: 1 }}>
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <hr />
        <Menu theme="light" mode="inline">
          <Menu.Item key="1">
            <NavLink to="/dashboard">
              <div className="menu-item">
                <i className="bi bi-speedometer2" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Dashboard</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/integrar-whatsapp">
              <div className="menu-item">
                <i className="bi bi-whatsapp" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Integrar con WhatsApp</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/mensajes">
              <div className="menu-item">
                <i className="bi bi-chat-dots" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Mensajes</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
              <NavLink to="/asistente">
              <div className="menu-item">
                <i className="bi bi-robot" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Asistetente IA</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to="/automatizacion">
              <div className="menu-item">
                <i className="bi bi-gear-fill" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Automatización</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink to="/horarios">
              <div className="menu-item">
                <i className="bi bi-clock" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Horarios</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="7">
            <NavLink to="/reservaciones">
              <div className="menu-item">
                <i className="bi bi-calendar2-check" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Reservacioness</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="8">
            <NavLink to="/Calendario">
              <div className="menu-item">
                <i className="bi bi-calendar3" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Calendario</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="9">
            <NavLink to="/calificacion">
              <div className="menu-item">
                <i className="bi bi-star" style={{ fontSize: '1.2rem' }}></i>
                <span className="label">Calificación</span>
              </div>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <Menu theme="light" mode="inline" style={{ marginTop: 'auto' }}>
        <Menu.Item key="10">
          <NavLink to="/Usuarios">
            <div className="menu-item">
              <i className="bi bi-people" style={{ fontSize: '1.2rem' }}></i>
              <span className="label">Usuarios</span>
            </div>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="11">
          <NavLink to="/logout">
            <div className="menu-item">
              <i className="bi bi-box-arrow-right" style={{ fontSize: '1.2rem' }}></i>
              <span className="label">Logout</span>
            </div>
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidenav;