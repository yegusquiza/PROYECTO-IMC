export default function Info  ({ peso, altura, imc, diaDePesaje, horaDePesaje })  {

    return (
      <div className="col m6 s12">
          <div className="card">
            <div className="card-content">
               <span className="card-title"><b>IMC</b></span>
            <div className="card-data center m6 s6">
               <p><b>IMC:</b> {imc}</p>
               <p><b>Peso:</b> {peso} kg</p>
               <p><b>Altura:</b> {altura} cm</p>
               <p><b>Día y Hora:</b> {diaDePesaje} {horaDePesaje}</p>
               
            </div>
            </div>
          </div>
      </div>
    );
  }