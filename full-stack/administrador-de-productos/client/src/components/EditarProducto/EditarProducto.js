import React from "react";
import { editarProducto } from "../../actions/producto";
import Nuevoproducto from "../NuevoProducto/NuevoProducto";
import { useNavigate } from "@reach/router";

const Editarproducto = (props) => {
  const { title, price, description, _id } = props;

  const navigate = useNavigate();

  const editar = async (data) => {
    const { success } = await editarProducto(_id, data);
    if (!success) window.alert("No se pudo editar");
    if (success) navigate(`/${_id}`, { replace: true });
  };
  return (
    <div>
      <Nuevoproducto
        defaultValues={{ title, price, description }}
        onSubmitCallback={editar}
      />
    </div>
  );
};

export default Editarproducto;
