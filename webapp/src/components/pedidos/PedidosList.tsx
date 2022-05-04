import React, { useState, useEffect } from "react";
import { Pedido } from "../../shared/shareddtypes"
import { Button, Container } from "react-bootstrap";
import { getPedidos, getPedidosByEmail } from "../../api/api";
import { VCARD } from "@inrupt/lit-generated-vocab-common";
import { useSession } from "@inrupt/solid-ui-react";
import {
    getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";

async function retirevePODEmail(webID: string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let email = getStringNoLocale(profile as Thing, VCARD.note.iri.value) as string;
    return email;
  }

function PedidosList() {

    const { session } = useSession();
    const { webId } = session.info;

    const [email, setEmail] = React.useState("");

    const getPODEmail = async () => {
        setEmail(await retirevePODEmail(webId!))
    }
    ;

    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    const refreshProducts = async () => {
        setPedidos(await getPedidosByEmail(email.toString()));
    }

    useEffect(()=>{
        getPODEmail();
        refreshProducts();
    },[]);

    console.log("Pedidos: " + pedidos.length);

    console.log(email);

    return (
            <Container  className="m-5">
            <h2>Pedidos del usuario</h2>
            <table>
                <tr>
                    <th>Estado</th>
                    <th>Email</th>
                    <th>Coste total</th>
                </tr>


            {pedidos.map((pedido: Pedido) => {
                return(
                    
                <tr>
                    <td>{pedido.estado}</td>
                    <td>{pedido.email}</td>
                    <td>{pedido.precio_final}</td>
                </tr>
                

                )

            })}
            </table>
            <Button className="mt-3" onClick={() => refreshProducts()}>Actualizar</Button>
            </Container>
        )

}

export default PedidosList; 