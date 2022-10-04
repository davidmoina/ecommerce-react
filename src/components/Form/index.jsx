import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Shop } from "../../context/CartContext";
import { db } from "../../firebase/config";
import generateOrder from "../../services/generateOrder";
import styles from "./styles.module.scss";

const Form = () => {

  const {register, formState: {errors}, handleSubmit, } = useForm();

  const {totalPrice, clearCart, cart} = useContext(Shop);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const total = totalPrice();
    const order = generateOrder(
      data.name,
      data.surname,
      data.email,
      data.phone,
      data.country,
      data.address,
      data.information,
      data.postcode,
      data.city,
      data.terms,
      data.newsletter,
      cart,
      total
    );
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), order);

    //con esta parte actualizamos el documento, en este caso el stock
    cart.forEach(async (productInCart) => {
      //primero se accede a la referencia del producto
      const productModified = doc(db, "products", productInCart.id);
      //A continuacion llamamos al Snapshot desde firebase
      const productSnap = await getDoc(productModified);
      
      // actualizamos el stock del producto con productSnap.data().stock
      await updateDoc(productModified, {
        stock: productSnap.data().stock - productInCart.quantity
      });
    });
    setLoading(false);
    clearCart();
    Swal.fire(
      'Gracias! Pedido realizado correctamente.',
      `Su numero de pedido es: ${docRef.id}`,
      'success',
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Complete los datos a continuacion para finalizar la compra</h2>
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" {...register("name", {required: true})} />
        {errors.name?.type === "required" && <p>Este campo es requerido.</p>}
      </div>
      <div>
        <label htmlFor="">Apellidos</label>
        <input type="text" {...register("surname", {required: true})}/>
        {errors.surname?.type === "required" && <p>Este campo es requerido.</p>}
      </div>
      <div>
        <label htmlFor="">Correo</label>
        <input type="text" {...register("email", { pattern: /\S+@\S+\.\S+/ })} />
        {errors.email?.type === "pattern" && <p>El formato de email es incorrecto</p>}
      </div>
      <div>
        <label htmlFor="">Numero de telefono</label>
        <input type="text" {...register("phone", {required: true})}/>
        {errors.phone?.type === "required" && <p>Este campo es requerido.</p>}
      </div>
      <div>
        <label htmlFor="">Pais</label>
        <select name="country" id="" {...register("country")}>
          <option value="es">España</option>
          <option value="arg">Argentina</option>
          <option value="eeuu">Estados unidos</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Direccion</label>
        <input type="text" {...register("address", {required: true})}/>
        {errors.address?.type === "required" && <p>Este campo es requerido.</p>}
      </div>
      <div>
        <label htmlFor="">Informacion adicional</label>
        <input type="text" {...register("information")}/>
      </div>
      <div>
        <label htmlFor="">Codigo postal</label>
        <input type="text" {...register("postcode", {required: true})}/>
        {errors.postcode?.type === "required" && <p>Este campo es requerido.</p>}
      </div>
      <div>
        <label htmlFor="">Ciudad</label>
        <input type="text" {...register("city", {required: true})}/>
        {errors.city?.type === "required" && <p>Este campo es requerido.</p>}
      </div>
      <div>
        <div>
          <input type="checkbox" {...register("terms", {required: true})} id="" />
          <p>Terminos</p>
          {errors.terms?.type === "required" && <p>Este campo es requerido.</p>}
        </div>
        <div>
          <input type="checkbox" {...register("newsletter")} id="" />
          <p>Newsletter</p>
        </div>
      </div>
      <div>
        {cart.length > 0 
        ? <input className={styles.buttonConfirm} type="submit" value="Confirmar compra"/>
        : <p>Añade productos al carrito para confirmar la compra.</p>}
      </div>
    </form>
  )
};

export default Form;