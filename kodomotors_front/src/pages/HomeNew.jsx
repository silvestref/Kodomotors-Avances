import React, { useEffect, useState } from 'react';

import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

const HomeNew = () => {

  // NECESARIO PARA VALIDACIÓN DE SESIONES ///////////////

  const [auth, setAuth] = useState(false)  //No autorizado por defecto
  const [name, setName] = useState("")
  const history = useHistory();
  axios.defaults.withCredentials = true;  //Extracción de cookies

  useEffect(()=> {
    axios.get("http://localhost:8081")  
    .then(res => {
      if(res.data.Status === "Success") {  //Si esta logueado cambiar estado a True. Redirigir a pagina
        setAuth(true)
        setName(res.data.name)
        history.push('/mensajes')
      } else {                             //Si no, estado a False. Redirigir Login
        setAuth(false)
        history.push('/sign-in')
      }
    })
    .catch(err => console.error(err));
  }, [])

  ////////////////////////////////////////////////////////


    const [phoneNumber, setPhoneNumber] = useState('+51960953104');
    const [message, setMessage] = useState('Hola');
    const [mediaUrl, setMediaUrl] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [status, setStatus] = useState('');
    const [activeTab, setActiveTab] = useState('text');
  
    const API_BASE_URL = 'http://localhost:8081';
  
    // 1. Funcion que maneja la respuesta y evita que explote si no es JSON
    const handleResponse = async (response) => {
      if (!response.ok) {
        // Si el status no es 200-299, podríamos tirar error o parsear el body como texto
        const errorText = await response.text();
        throw new Error(`Error HTTP: ${response.status}\n${errorText}`);
      }
  
      // Verificamos content-type
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      // Si no es JSON, devolvemos directamente el texto (para no romper el parse)
      return await response.text();
    };
  
    const formatPhoneNumber = (phone) => {
      // Eliminar caracteres no numéricos
      const phoneDigits = phone.replace(/\D/g, '');
      // Retornar con sufijo de WhatsApp
      return `${phoneDigits}@s.whatsapp.net`;
    };
  
    const sendTextMessage = async () => {
      try {
        setStatus('Sending...');
        const formattedPhone = formatPhoneNumber(phoneNumber);
        
        const url = `${API_BASE_URL}/send-message-bot/${encodeURIComponent(formattedPhone)}/${encodeURIComponent(message)}`;
        const response = await fetch(url);
        
        // 2. Usamos la función para parsear
        const data = await handleResponse(response);
  
        setStatus(`Mensaje enviado exitosamente`);
        console.log('Respuesta del backend:', data);
      } catch (error) {
        console.error('Error enviando mensaje:', error);
        setStatus('Mensaje enviado, pero ocurrió un problema en el parse');
      }
    };
  
    const sendMediaMessage = async () => {
      try {
        setStatus('Sending media...');
        const formattedPhone = formatPhoneNumber(phoneNumber);
  
        const response = await fetch(`${API_BASE_URL}/send-media-bot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phoneid: formattedPhone,
            message: message,
            url: mediaUrl,
          }),
        });
        const data = await handleResponse(response);
  
        setStatus('Media enviado exitosamente');
        console.log('Respuesta del backend:', data);
      } catch (error) {
        console.error('Error enviando media:', error);
        setStatus('Mensaje enviado, pero ocurrió un problema en el parse');
      }
    };
  
    const sendFile = async () => {
      try {
        setStatus('Sending file...');
        const formattedPhone = formatPhoneNumber(phoneNumber);
  
        const response = await fetch(`${API_BASE_URL}/send-file-bot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phoneid: formattedPhone,
            url: fileUrl,
          }),
        });
        const data = await handleResponse(response);
  
        setStatus(`Archivo enviado exitosamente`);
        console.log('Respuesta del backend:', data);
      } catch (error) {
        console.error('Error enviando archivo:', error);
        setStatus('Mensaje enviado, pero ocurrió un problema en el parse');
      }
    };
  
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <div style={{ 
          border: '1px solid #ccc', 
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Enviar Mensaje WhatsApp</h2>
  
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Número de WhatsApp (con o sin +):
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                const input = e.target.value;
                // Permitir solo números y un "+" al inicio
                if (/^\+?[0-9]*$/.test(input)) {
                  setPhoneNumber(input);
                }
              }}
              placeholder="Ejemplo: +51960953104"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
  
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              <button
                onClick={() => setActiveTab('text')}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  backgroundColor: activeTab === 'text' ? '#007bff' : '#f0f0f0',
                  color: activeTab === 'text' ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Texto
              </button>
              <button
                onClick={() => setActiveTab('media')}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  backgroundColor: activeTab === 'media' ? '#007bff' : '#f0f0f0',
                  color: activeTab === 'media' ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Media
              </button>
              <button
                onClick={() => setActiveTab('file')}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  backgroundColor: activeTab === 'file' ? '#007bff' : '#f0f0f0',
                  color: activeTab === 'file' ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Archivo
              </button>
            </div>
  
            {activeTab === 'text' && (
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>Mensaje:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje aquí"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '10px',
                    minHeight: '100px',
                    resize: 'vertical'
                  }}
                />
                <button
                  onClick={sendTextMessage}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Enviar Mensaje
                </button>
              </div>
            )}
  
            {activeTab === 'media' && (
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>Descripción:</label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descripción opcional"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                />
                <label style={{ display: 'block', marginBottom: '5px' }}>URL del Media:</label>
                <input
                  type="text"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                />
                <button
                  onClick={sendMediaMessage}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Enviar Media
                </button>
              </div>
            )}
  
            {activeTab === 'file' && (
              <div>
                <label style={{ display: 'block', marginBottom: '5px' }}>URL del Archivo:</label>
                <input
                  type="text"
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  placeholder="https://ejemplo.com/documento.pdf"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                />
                <button
                  onClick={sendFile}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Enviar Archivo
                </button>
              </div>
            )}
          </div>
  
          {status && (
            <div style={{
              marginTop: '20px',
              padding: '10px',
              backgroundColor: status.includes('Error') ? '#ffebee' : '#f0f7f0',
              borderRadius: '4px',
              color: status.includes('Error') ? '#c62828' : '#2e7d32'
            }}>
              <p>{status}</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default HomeNew;
  
