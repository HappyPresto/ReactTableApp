import React from 'react';

const {
    Provider : TableapiServiceProvider,
    Consumer : TableapiServiceConsumer 
} = React.createContext();

export {
    TableapiServiceConsumer,
    TableapiServiceProvider
};