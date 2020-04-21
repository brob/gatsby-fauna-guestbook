import React from 'react';

import './style.scss';
import { useStaticQuery, graphql } from "gatsby"

import Signature from './signature'

      

const Signatures = () => {
   
    const SignatureMarkup = () => {
        return Signatures.allSignatures.nodes.map(signature => {
            return (
                <Signature key={signature._id} signature={signature}></Signature>
            )
        }).reverse()
    }

    return (
        <SignatureMarkup></SignatureMarkup>
    )
}

export default Signatures