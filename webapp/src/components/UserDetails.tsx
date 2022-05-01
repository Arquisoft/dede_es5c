import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { url } from 'inspector';
import { profile } from 'console';
import { getUserByEmail } from "../api/api";
import { useSession, CombinedDataProvider, Image, LogoutButton, Text } from "@inrupt/solid-ui-react";
import { Button, Card, CardActionArea, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import {
    getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";


async function retrievePODAddress(webID: string): Promise<string> {
    console.log(webID);
    let myDataSet = await getSolidDataset(webID)
    let profile = getThing(myDataSet, webID)
    let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressProfile = await getThing(myDataSet, urlAddress)
    let ret= getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.region) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.locality) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;
    return ret
  }




   

    const [address, setAddress] = React.useState("");

    const getPODAddress = async () => {setAddress(await retrievePODAddress(webId!))
    }
    ;

    useEffect(() => {
        getPODAddress();
        console.log(address);
    })

    return (
        <Container fixed>
      <CombinedDataProvider datasetUrl={webId!} thingUrl={webId!}>
        <Card style={{ maxWidth: 480 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Text property={FOAF.name.iri.value} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
              <Text property={VCARD.organization_name.iri.value} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
              {address.toString()}
            </Typography>
          </CardContent>

          <CardActionArea style={{ justifyContent: "center", display: "flex" }}>
            <Image property={VCARD.hasPhoto.iri.value} width={480} />
          </CardActionArea>
        </Card>
      </CombinedDataProvider>
      <LogoutButton >
        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
          Logout
        </Button>
      </LogoutButton>
    </Container>


    );
}

export default UserDetails;
