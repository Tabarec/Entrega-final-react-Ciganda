import { Link } from "react-router-dom";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
       <div>
         <h1>Gracias... tu numero es {orderId} </h1>
         <Link to="/">Seguir comprando</Link>
       </div>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingrese su teléfono"
            onChange={capturar}
            name="phone"
          />

          <input
            type="text"
            placeholder="Ingrese su email"
            onChange={capturar}
            name="email"
          />

          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};