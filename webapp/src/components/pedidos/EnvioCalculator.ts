import {Client, DistanceMatrixRow} from "@googlemaps/google-maps-services-js";
import {Request, Response} from "express";
import UserModel from "../../../../restapi/models/UserModel";
import {getSolidDataset, getStringNoLocale, getThing, getUrl, Thing} from "@inrupt/solid-client";
import {VCARD} from "@inrupt/lit-generated-vocab-common";

var axios = require('axios');

var origin = "943X%2BWF%20Oviedo";

export interface Address{
    street: String,
    zip_code: String,
    locality: String,
    region: String,
    country: String
};


async function calculateShippingCost(address: Address): Promise<number> {

    const destinationString = address.street + "%20" + address.locality + "%20" + address.region + "%20" + address.country;

    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + origin + '&destinations=' + destinationString,
        headers: { }
    };

    let distance = 0.0;

    axios(config)
        .then(function (response:
                            { destination_addresses: Array<string>,
                                origin_addresses: Array<string>,
                                rows: Array<Array<DistanceMatrixRow>>,
                                status: String
                            })
        {
            //console.log("-------DISTANCIA: " + JSON.stringify(response.rows[0]));
            distance = response.rows[0][0].elements[0].distance.value;
            console.log("-------DISTANCIA: " + distance);
        })
        .catch(function (error: any) {
            console.log(error);
        });

    return (distance * 0.01);
};

async function getShippingCost(webID: string): Promise<number> {
    console.log(webID);
    let myDataSet = await getSolidDataset(webID)
    let profile = getThing(myDataSet, webID)
    let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressProfile = await getThing(myDataSet, urlAddress)
    let address = {
        country: getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string,
        region: getStringNoLocale(addressProfile as Thing, VCARD.region) as string,
        locality: getStringNoLocale(addressProfile as Thing, VCARD.locality) as string,
        zip_code: getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string,
        street: getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string
    };
    return calculateShippingCost(address);
}
