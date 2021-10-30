import React, { Component } from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank () {
    let  data={
        firstName:'pavan',
        lastName:'muthina'
    }
    

        return (
            <div>
                <AndhraBank info={data}/>
                <CorporationBank info={data}/>
                
            </div>
        )
        }
