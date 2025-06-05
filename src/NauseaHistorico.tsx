import React, { useState } from 'react';
import './NauseaHistorico.css';


const NauseaHistorico: React.FC = () => {
  const [alergias, setAlergias] = useState([{ tipo: '', reacao: '' }]);
  const [alergiaNegativo, setAlergiaNegativo] = useState(false);

  const [cirurgias, setCirurgias] = useState([{ cirurgia: '', anestesia: '', dados: '' }]);
  const [cirurgiaNegativo, setCirurgiaNegativo] = useState(false);

  const [cardiaco, setCardiaco] = useState('');
  const [resp, setResp] = useState('');

  const [neuroRegional, setNeuroRegional] = useState('');
  const [neuroOutro, setNeuroOutro] = useState('');

  const [viaAereaDificil, setViaAereaDificil] = useState('');

  const [mallampati, setMallampati] = useState('');

  const [resposta, setResposta] = useState<string>("");

  const [asa, setAsa] = useState('');

  const [ecg, setEcg] = useState("");
  const [outroTexto, setOutroTexto] = useState("");

  const [respostaEmergencia, setRespostaEmergencia] = useState('');

  const [valores, setValores] = useState({
    hb: '', ht: '', na: '', k: '', plaquetas: '', glicose: ''
  });

  const handleChange = (campo: keyof typeof valores, valor: string) => {
    setValores({ ...valores, [campo]: valor });
  };

  const estiloInput: React.CSSProperties = {
    width: '100%',
    padding: '0.3rem',
    border: 'none',
    backgroundColor: 'white',
    outline: 'none',
    textAlign: 'center',
    boxSizing: 'border-box'
  };  

  const estiloCampo = (disabled: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '0.3rem',
    border: 'none',
    backgroundColor: disabled ? '#f0f0f0' : 'white',
    opacity: disabled ? 0.6 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    boxSizing: 'border-box',
    outline: 'none',
  });

  const [negativo, setNegativo] = useState(false);
  const [tipagem, setTipagem] = useState('');
  const [reserva, setReserva] = useState(''); 


  // Alergias
  const adicionarAlergia = () => setAlergias([...alergias, { tipo: '', reacao: '' }]);
  const removerAlergia = () => {
    if (alergias.length > 1) setAlergias(alergias.slice(0, -1));
  };
  const handleAlergiaChange = (i: number, campo: 'tipo' | 'reacao', valor: string) => {
    const novas = [...alergias];
    novas[i][campo] = valor;
    setAlergias(novas);
  };

  // Cirurgias
  const adicionarCirurgia = () => setCirurgias([...cirurgias, { cirurgia: '', anestesia: '', dados: '' }]);
  const removerCirurgia = () => {
    if (cirurgias.length > 1) setCirurgias(cirurgias.slice(0, -1));
  };
  const handleCirurgiaChange = (i: number, campo: 'cirurgia' | 'anestesia' | 'dados', valor: string) => {
    const novas = [...cirurgias];
    novas[i][campo] = valor;
    setCirurgias(novas);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>

      {/* TABELA 1 - ALERGIAS */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <strong>Alergias</strong>
          <label>
            <input
              type="checkbox"
              checked={alergiaNegativo}
              onChange={() => setAlergiaNegativo(!alergiaNegativo)}
            />{' '}
            Negativo
          </label>
        </div>

        <div style={{ display: 'flex', width: 'max-content', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '31.25rem',
              height: '1rem',
              textAlign: 'left',
              tableLayout: 'fixed',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#ddd' }}>
                <th style={{ border: '1px solid black', padding: '0.5rem' }}>Tipo/Agente</th>
                <th style={{ border: '1px solid black', padding: '0.5rem' }}>Reação</th>
              </tr>
            </thead>
            <tbody>
              {alergias.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black' }}>
                    <input
                      type="text"
                      value={item.tipo}
                      onChange={(e) => handleAlergiaChange(index, 'tipo', e.target.value)}
                      disabled={alergiaNegativo}
                      style={estiloCampo(alergiaNegativo)}
                    />
                  </td>
                  <td style={{ border: '1px solid black' }}>
                    <input
                      type="text"
                      value={item.reacao}
                      onChange={(e) => handleAlergiaChange(index, 'reacao', e.target.value)}
                      disabled={alergiaNegativo}
                      style={estiloCampo(alergiaNegativo)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', gap: '0.5rem' }}>
            <button
              onClick={adicionarAlergia}
              disabled={alergiaNegativo}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                opacity: alergiaNegativo ? 0.5 : 1,
              }}
            >
              +
            </button>
            <button
              onClick={removerAlergia}
              disabled={alergiaNegativo || alergias.length <= 1}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                opacity: alergiaNegativo ? 0.5 : 1,
              }}
            >
              −
            </button>
          </div>
        </div>
      </div>

      {/* TABELA 2 - CIRURGIA/ANESTESIA */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <strong>Cirurgia/anestesia prévia</strong>
          <label>
            <input
              type="checkbox"
              checked={cirurgiaNegativo}
              onChange={() => setCirurgiaNegativo(!cirurgiaNegativo)}
            />{' '}
            Negativo
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: 'max-content', gap: '1rem', alignItems: 'flex-start' }}>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '31.25rem',
              height: '1rem',
              textAlign: 'left',
              tableLayout: 'fixed',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#ddd' }}>
                <th style={{ border: '1px solid black', padding: '0.5rem' }}>Cirurgia</th>
                <th style={{ border: '1px solid black', padding: '0.5rem' }}>Anestesia</th>
                <th style={{ border: '1px solid black', padding: '0.5rem' }}>Dados Relevantes</th>
              </tr>
            </thead>
            <tbody>
              {cirurgias.map((linha, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black' }}>
                    <input
                      type="text"
                      value={linha.cirurgia}
                      onChange={(e) => handleCirurgiaChange(index, 'cirurgia', e.target.value)}
                      disabled={cirurgiaNegativo}
                      style={estiloCampo(cirurgiaNegativo)}
                    />
                  </td>
                  <td style={{ border: '1px solid black' }}>
                    <input
                      type="text"
                      value={linha.anestesia}
                      onChange={(e) => handleCirurgiaChange(index, 'anestesia', e.target.value)}
                      disabled={cirurgiaNegativo}
                      style={estiloCampo(cirurgiaNegativo)}
                    />
                  </td>
                  <td style={{ border: '1px solid black' }}>
                    <input
                      type="text"
                      value={linha.dados}
                      onChange={(e) => handleCirurgiaChange(index, 'dados', e.target.value)}
                      disabled={cirurgiaNegativo}
                      style={estiloCampo(cirurgiaNegativo)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', gap: '0.5rem' }}>
            <button
              onClick={adicionarCirurgia}
              disabled={cirurgiaNegativo}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                opacity: alergiaNegativo ? 0.5 : 1,
              }}
            >
              +
            </button>
            <button
              onClick={removerCirurgia}
              disabled={cirurgiaNegativo || cirurgias.length <= 1}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                opacity: alergiaNegativo ? 0.5 : 1,
              }}
            >
              −
            </button>
          </div>
        </div>
      </div>

      {/* RADIO BUTTON - Náuseas e Vômitos */}
      <div>
        <strong>Histórico de náuseas/vômitos no pós-operatório:</strong>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem' }}>
          <label>
            <input
              type="radio"
              name="nausea"
              value="sim"
              checked={resposta === 'sim'}
              onChange={() => setResposta('sim')}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="nausea"
              value="nao"
              checked={resposta === 'nao'}
              onChange={() => setResposta('nao')}
            />
            Não
          </label>
        </div>
      </div>

      {/* EXAME FÍSICO */}
      <div style={{ marginTop: '2rem' }}>
        <strong>Exame Físico</strong>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              <strong>Cardíaco:</strong> RCR EM 2T, S/S
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="cardiaco"
                value="sim"
                checked={cardiaco === 'sim'}
                onChange={() => setCardiaco('sim')}
              />{' '}
              (SIM)
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="cardiaco"
                value="nao"
                checked={cardiaco === 'nao'}
                onChange={() => setCardiaco('nao')}
              />{' '}
              (NÃO)
            </label>
          </div>

          <div>
            <label>
              <strong>Resp:</strong> MV + EM AHT, S/RA
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="resp"
                value="sim"
                checked={resp === 'sim'}
                onChange={() => setResp('sim')}
              />{' '}
              (SIM)
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="resp"
                value="nao"
                checked={resp === 'nao'}
                onChange={() => setResp('nao')}
              />{' '}
              (NÃO)
            </label>
          </div>
        </div>      
     </div>

      {/* NEURO: COTE, GLASGOW */}
      <div style={{ marginTop: '2rem' }}>
        <label style={{ fontWeight: 'bold' }}>Neuro: COTE, GLASGOW:</label>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontWeight: 'bold', marginRight: '1rem' }}>Regional</label>
            <input
              type="text"
              value={neuroRegional}
              onChange={(e) => setNeuroRegional(e.target.value)}
              style={{
                border: 'none',
                borderBottom: '2px solid black',
                outline: 'none',
                width: '20rem',
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: 'bold', marginRight: '1.9rem' }}>Outro</label>
            <input
              type="text"
              value={neuroOutro}
              onChange={(e) => setNeuroOutro(e.target.value)}
              style={{
                border: 'none',
                borderBottom: '2px solid black',
                outline: 'none',
                width: '20rem',
              }}
            />
          </div>
        </div>
    </div>

      {/* VIA AÉREA */}
      <div style={{ marginTop: '2rem' }}>
        <strong>Via aérea</strong>
        <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
          História de via aérea difícil
        </div>

        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <label>
            <input
              type="radio"
              name="viaAerea"
              value="sim"
              checked={viaAereaDificil === 'sim'}
              onChange={() => setViaAereaDificil('sim')}
            />{' '}
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="viaAerea"
              value="nao"
              checked={viaAereaDificil === 'nao'}
              onChange={() => setViaAereaDificil('nao')}
            />{' '}
            Não
          </label>
         </div>
        </div>

      {/* MALLAMPATI */}
      <div style={{ marginTop: '2rem' }}>
        <strong>Mallampati</strong>

        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <label>
            <input
              type="radio"
              name="mallampati"
              value="I"
              checked={mallampati === 'I'}
              onChange={() => setMallampati('I')}
            />{' '}
            I
          </label>
          <label>
            <input
              type="radio"
              name="mallampati"
              value="II"
              checked={mallampati === 'II'}
              onChange={() => setMallampati('II')}
            />{' '}
            II
          </label>
          <label>
            <input
              type="radio"
              name="mallampati"
              value="III"
              checked={mallampati === 'III'}
              onChange={() => setMallampati('III')}
            />{' '}
            III
          </label>
          <label>
            <input
              type="radio"
              name="mallampati"
              value="IV"
              checked={mallampati === 'IV'}
              onChange={() => setMallampati('IV')}
            />{' '}
            IV
          </label>
        </div>
      </div>

      {/* LABORATÓRIO */}
      <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', paddingTop: '2rem' }}>
      <strong>Laboratório</strong>

      <div style={{ width: '31.25rem' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '1rem', tableLayout: 'fixed', border: '1px solid black' }}>
          <thead>
            <tr style={{ backgroundColor: '#ddd' }}>
              <th style={{ border: '1px solid black', padding: '0.5rem' }}>Hb</th>
              <th style={{ border: '1px solid black', padding: '0.5rem' }}>Ht</th>
              <th style={{ border: '1px solid black', padding: '0.5rem' }}>Na</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '0' }}>
                <input
                  type="text"
                  value={valores.hb}
                  onChange={(e) => handleChange('hb', e.target.value)}
                  style={estiloInput}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '0' }}>
                <input
                  type="text"
                  value={valores.ht}
                  onChange={(e) => handleChange('ht', e.target.value)}
                  style={estiloInput}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '0' }}>
                <input
                  type="text"
                  value={valores.na}
                  onChange={(e) => handleChange('na', e.target.value)}
                  style={estiloInput}
                />
              </td>
            </tr>
            <tr style={{ backgroundColor: '#ddd', fontWeight: 'bold' }}>
              <td style={{ border: '1px solid black', padding: '0.5rem', textAlign: 'center' }}>K</td>
              <td style={{ border: '1px solid black', padding: '0.5rem', textAlign: 'center' }}>Plaquetas</td>
              <td style={{ border: '1px solid black', padding: '0.5rem', textAlign: 'center' }}>Glicose</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '0' }}>
                <input
                  type="text"
                  value={valores.k}
                  onChange={(e) => handleChange('k', e.target.value)}
                  style={estiloInput}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '0' }}>
                <input
                  type="text"
                  value={valores.plaquetas}
                  onChange={(e) => handleChange('plaquetas', e.target.value)}
                  style={estiloInput}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '0' }}>
                <input
                  type="text"
                  value={valores.glicose}
                  onChange={(e) => handleChange('glicose', e.target.value)}
                  style={estiloInput}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>

      {/* MEDICAÇÃO */}
      <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>

        <div style={{ display: 'flex', width: 'max-content', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '31.25rem',
              height: '1rem',
              textAlign: 'center',
              tableLayout: 'fixed',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#ddd' }}>
                <th style={{ border: '1px solid black', padding: '0.5rem' }}>Medicação(verificarsetomounodiadacirurgia)</th>
              </tr>
            </thead>
            <tbody>
              {alergias.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black' }}>
                    <input
                      type="text"
                      value={item.tipo}
                      onChange={(e) => handleAlergiaChange(index, 'tipo', e.target.value)}
                      disabled={alergiaNegativo}
                      style={estiloCampo(alergiaNegativo)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', gap: '0.5rem' }}>
            <button
              onClick={adicionarAlergia}
              disabled={alergiaNegativo}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                opacity: alergiaNegativo ? 0.5 : 1,
              }}
            >
              +
            </button>
            <button
              onClick={removerAlergia}
              disabled={alergiaNegativo || alergias.length <= 1}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'lightgray',
                border: 'none',
                borderRadius: '10px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                opacity: alergiaNegativo ? 0.5 : 1,
              }}
            >
              −
            </button>
          </div>
        </div>
      </div>

      {/* DISTÂNCIA ESTERNO/MENTO */}
      <div style={{ marginTop: '2rem' }}>
        <strong>Distância esterno/mento</strong>

        <div style={{}}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label>
              11cm
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="cardiaco"
                value="sim"
                checked={cardiaco === 'sim'}
                onChange={() => setCardiaco('sim')}
              />{' '}
              (SIM)
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name="cardiaco"
                value="nao"
                checked={cardiaco === 'nao'}
                onChange={() => setCardiaco('nao')}
              />{' '}
              (NÃO)
            </label>
          </div>
        </div>      
     </div>

      {/* DENTIÇÃO/PROGNIMATISMO e OUTROS */}
      <div style={{ marginTop: '2rem' }}>
        <label style={{ fontWeight: 'bold' }}>Dentição/Prognimatismo</label>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              value={neuroRegional}
              onChange={(e) => setNeuroRegional(e.target.value)}
              style={{
                border: 'none',
                borderBottom: '2px solid black',
                outline: 'none',
                width: '20rem',
              }}
            />
          </div>
        </div>
       </div>

      <div style={{ marginTop: '2rem' }}>
        <label style={{ fontWeight: 'bold' }}>OUTROS</label>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              value={neuroRegional}
              onChange={(e) => setNeuroRegional(e.target.value)}
              style={{
                border: 'none',
                borderBottom: '2px solid black',
                outline: 'none',
                width: '20rem',
              }}
            />
          </div>
        </div>
       </div>

      {/* HEMORRAGIAS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', marginTop: '2rem' }}>
        <strong>Hemorragias</strong>
        <label>
          <input
            type="checkbox"
            checked={alergiaNegativo}
            onChange={() => setAlergiaNegativo(!alergiaNegativo)}
          />{' '}
          Negativo
        </label>
      </div>     

      <div className="tipagem-container">
        <div className="linha-input">
          <label>Tipagem solicitada</label>
          <input type="text" className="linha" />
        </div>

        <div className="linha-input">
          <label>Reserva de</label>
          <input type="text" className="linha pequeno" />
          <span>U conc. Glob</span>
        </div>
      </div>

      {/* ASA */}
      <div style={{ marginTop: '2rem' }}>
        <strong>ASA</strong>

          <div style={{ marginTop: '0.5rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <label>
              <input
                type="radio"
                name="asa"
                value="I"
                checked={asa === 'I'}
                onChange={() => setAsa('I')}
              />{' '}
              I
            </label>
            <label>
              <input
                type="radio"
                name="asa"
                value="II"
                checked={asa === 'II'}
                onChange={() => setAsa('II')}
              />{' '}
              II
            </label>
            <label>
              <input
                type="radio"
                name="asa"
                value="III"
                checked={asa === 'III'}
                onChange={() => setAsa('III')}
              />{' '}
              III
            </label>
            <label>
              <input
                type="radio"
                name="asa"
                value="IV"
                checked={asa === 'IV'}
                onChange={() => setAsa('IV')}
              />{' '}
              IV
            </label>
          </div>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', marginTop: '0.5rem' }}>
        <strong>Emergência</strong>
        <label>
          <input
            type="radio"
            name="emergencia"
            value="sim"
            checked={respostaEmergencia === 'sim'}
            onChange={() => setRespostaEmergencia('sim')}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="emergencia"
            value="nao"
            checked={respostaEmergencia === 'nao'}
            onChange={() => setRespostaEmergencia('nao')}
          />
          Não
        </label>
      </div>

      {/* EXAMES COMPLEMENTARES */}

   <div className="exames-container">
      <strong>EXAMES COMPLEMENTARES:</strong>

      <div className="subtitulo">ECG:</div>

      <div className="descricao">
        RITMO SINUSAL, AUSÊNCIAS DE ARRITMIAS / SOBRECARGAS OU ISQUEMIAS AGUDAS
      </div>

      <div className="opcoes">
        <label>
          <input
            type="radio"
            name="ecg"
            value="sim"
            checked={ecg === "sim"}
            onChange={() => setEcg("sim")}
          />
          (SIM)
        </label>
        <label>
          <input
            type="radio"
            name="ecg"
            value="nao"
            checked={ecg === "nao"}
            onChange={() => setEcg("nao")}
          />
          (NÃO)
        </label>
        <label>
          <input
            type="radio"
            name="ecg"
            value="outro"
            checked={ecg === "outro"}
            onChange={() => setEcg("outro")}
          />
          (OUTRO:
          <input
            type="text"
            className="campo-outro"
            disabled={ecg !== "outro"}
            value={outroTexto}
            onChange={(e) => setOutroTexto(e.target.value)}
          />
          )
        </label>
      </div>
    </div>
       
    </div>
  );
};

export default NauseaHistorico;
